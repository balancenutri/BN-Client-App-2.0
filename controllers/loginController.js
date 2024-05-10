import { mysqlConnection } from "../db.js";

export const forceAppUpdate = async (req, res) => {
    let responseData;
    responseData = {
        status : true,
        message : 'Latest App Version',
        data : {
            user_type:"Lead",
            android_version:"136",
            ios_version:"1.0.83",
            contact1:"09820543329",
            contact2:"09867940635",
            isRenewal:false,
            isRenwalIMF:false,
            program_name:null,
            disable_lead_flow:false,
            counselor_whatsapp_no:"9820792855",
            weight_loss_type:"0"
        }
    };
  return res.status(200).json(responseData);
}

