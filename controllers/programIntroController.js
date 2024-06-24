// import express from "express";
// import md5 from "md5";
// import { mysqlConnection } from "../db.js";
// import { updateRecordMultipleWhere,createUserFCMToken } from "../common/query.js";

export const programDetails = async (req, res) => {
    try {
       
        const response_data = {
          status: true,
          message: "Your Program Details",
          last_visited_screen: "program-details",
          skip_assessment: 0,
          data: {
            program_name: "Active",
            prog_duration: "45 Days",
            program_status: "Active",
            mentor_name: "M/s. Nikita K.",
            check_ICL: "N",
            redirect_page: "program-details",
            order_id: "49458",
            user_status: "1",
            program_renewed: 0,
            explore_button: "",
            start_in: "",
            needhealthscoretaken: "No",
            skip_assessment: 0,
            program_details_flag: 3,
            is_mentor_assigned: true,
            is_cleanse_program: false,
          },
        };

        return res.status(200).json(response_data);
    } catch (error) {
        console.error('Error in programDetails:', error);
        return res.status(500).json({ status: false, message: 'Internal server error' });
    }
};


export const programValidity = async (req, res) => {
  try {
     
      const response_data = {
        status: true,
        data: {
            prog_name: "Plateau Breaker(Client Exclusive)",
            prog_validity: "115",
            addntl_validity: "25",
            as_per_prog: 90
          }
    }

      return res.status(200).json(response_data);
  } catch (error) {
      console.error('Error in programDetails:', error);
      return res.status(500).json({ status: false, message: 'Internal server error' });
  }
};


export const messageByKhyati = async (req, res) => {
  try {
     
      const response_data = {
          status: true,
          message: "video_by_user_type",
          skip_assessment: 0,
          program_details_flag: 4,
          check_ICL: "N",
          program_renewed: 1,
          welcome_info: [
                "<font face='Roboto-Regular' size='5'>Be Regular with your trackers & <b>update</b> them on time.</font>",
                "<font face='Roboto-Regular' size='5'>Be <b>Vigilant</b> On Validity.</font>",
                "<font face='Roboto-Regular' size='5'>Don't forget the E kit.</font>",
                "<font face='Roboto-Regular' size='5'>Follow the sessions <b>better than</b> the last program!</font>"
            ],
          info_text: "<font face='Roboto-Regular' size='5'>Welcome once again to Balance Nutrition!<br>Glad to know you have decided to continue your journey & now it’s time to learn a few new concepts, unlearn a few old ones & get ready for <b>Advanced</b> learning.</font>",
          info_text2: "",
          about_program_video_link: "JlWeU-uF8Xc",
          fill_your_goal_button: false,
          upgrade_now_button: false,
          is_reform_program: false,
          assessment_id: "21318",
          data: {
              video_key: "Xt-hLRCGvdI"
            },
          mentor_name: "Prajakta"
    }

      return res.status(200).json(response_data);
  } catch (error) {
      console.error('Error in programDetails:', error);
      return res.status(500).json({ status: false, message: 'Internal server error' });
  }
};
