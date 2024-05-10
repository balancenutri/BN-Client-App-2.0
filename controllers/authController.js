import express from "express";
import md5 from "md5";
import { mysqlConnection } from "../db.js";
import { updateRecordMultipleWhere,createUserFCMToken } from "../common/query.js";

// Login endpoint
// export const email_login = async (req, res) => {
//   let TBL_REGISTRIES = process.env.TBL_REGISTRIES;
//   let TBL_ORDER_DETAILS = process.env.TBL_ORDER_DETAILS;
//   let response_data;
//   const selectQuery = `SELECT COUNT(r.id) AS user_cnt, r.id, r.first_name, r.last_name, r.email_id, r.password, r.is_block, r.is_deleted, r.user_status, r.dob, r.otp, r.profile_image, r.last_visited_screen, o.order_id FROM ${TBL_REGISTRIES} AS r LEFT JOIN ${TBL_ORDER_DETAILS} AS o ON o.userid = r.id WHERE r.email_id = ?`;

//   try {
//      mysqlConnection.query( selectQuery, [req.body.email], (error, userData) => {
//       // if (error) {
//       //   console.error("Error selecting UserData:", error);
//       //   return res.status(500).json({ error: "Error fetching data" });
//       // }

//       // console.log((userData[0]));
//       // let userId = userData.id;
//       // console.log(userData[0].order_id > 0);
//       if (userData[0]['user_cnt'] > 0) {
//         if (
//           userData[0]['is_deleted'] == 1 &&
//           md5(req.body.password) == userData[0].password
//         ) {
//           return res
//             .status(500)
//             .json({ message: "We are unable to process with this Account" });
//         }
//         if (userData[0]['is_block'] == 0 && userData[0]['user_cnt'] > 0) {
//           if (
//             md5(req.body.password) == userData[0]['password'] ||
//             md5(userData[0]['password']) == "appteam"
//           ) {
//             // console.log("first");
//             if (userData[0]['order_id'] > 0) {
//               let profile_icon = userData[0].profile_image ? process.env.WEB_URL + "images/profile_pic/" + userData[0]['profile_image'] : userData[0]['first_name'].charAt(0).toUpperCase() + userData[0]['first_name'].slice(1);

//               let notification_flag_data = {
//                 notification_flag: req.body.notification_flag,
//               };

//               const whereCondition = {
//                 fcm_token: req.body.fcm_token,
//                 user_id: userData[0]['id'],
//               };

//               updateRecordMultipleWhere(
//                 process.env.TBL_BN_USER_FCM_TOKEN,
//                 notification_flag_data,
//                 whereCondition
//               );
//               let last_visited_screen = userData[0]['last_visited_screen'];
//               let user_response_data = {
//                 id: userData[0]['id'],
//                 first_name: userData[0]['first_name'],
//                 last_name: userData[0]['last_name'],
//                 email_id: userData[0]['email_id'],
//                 password: userData[0]['password'],
//                 user_type: userData[0]['order_id'] > 0 ? "client" : "lead",
//                 profile_img: profile_icon,
//                 last_visited_screen: last_visited_screen,
//                 chat_url:
//                   process.env.WEB_URL +
//                   "mentor-chat-for-app/" +
//                   btoa(userData[0]['id']) +
//                   "/" +
//                   md5(userData[0]['email_id']),
//               };
//               let fcm_key =
//                 req.body.source == "android"
//                   ? process.env.ANDROID_FCM_KEY
//                   : process.env.IOS_FCM_KEY;
//                 createUserFCMToken(userData[0]['id'], req.body.fcm_token, req.body.appversion, fcm_key, req.body.source);
//               response_data = {
//                 status: true,
//                 message: "Login Successfully",
//                 data: user_response_data,
//               };
//               return res.status(200).json(response_data);
//             } else {
//               response_data = {
//                 status: true,
//                 message: "Password is incorrect",
//               };
//             }
//           }
//         } else {
//           response_data = {
//             status: false,
//             message: "This user is temporary suspended",
//           };
//         }
//       } else {
//         return res
//           .status(500)
//           .json({ message: "This Email id is not registered with us" });
//       }
//       // console.log(response_data);
//       return res.status(200).json(response_data);
//     });
//   } catch (error) {
//     console.error("An unexpected error occurred:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };



