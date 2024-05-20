// import express from "express";
// import md5 from "md5";
// import { mysqlConnection } from "../db.js";
// import { updateRecordMultipleWhere,createUserFCMToken } from "../common/query.js";

// Login endpoint
export const programDetails = async (req, res) => {
    try {
        const skip_assessment = true; 
       let programs_data = {
        "program_name": "Weight Loss Pro",
        "offer_blink": false,
        "offer_till": "0",
        "bt_text": "",
        "coupon_discount_available": "1700",
        "coupon_code_available": "BAL10",
        "coupon_code": "BAL10",
        "coupon_amount": "",
        "slider_array": [
          {
            "image_path": "https://www.balancenutrition.in/images/programs/appprogram/Weight_loss_pro_main_app.png",
            "image_type": "image",
            "video_link": ""
          },
          {
            "image_path": "https://www.balancenutrition.in/images/programs/appprogram/Weight_loss_pro_stats_app.png",
            "image_type": "image",
            "video_link": ""
          }
        ],
        "ideal_for": "Post Pregnancy, Desk Job, Sedentary Lifestyle",
        "feature_detail": "<font face='Roboto-Regular' size='5'>A perfect program for those having a sedentary lifestyle, desk jobs or not physically active.</font>",
        "ideal_for_image": "https://www.balancenutrition.in/images/programs/original/doublediscount.gif",
        "feature_detail_down": "",
        "feature_points": [
          "<font face='Roboto-Regular' size='5'>If you are weighing <b>more than</b> 75 kg still.</font>",
          "<font face='Roboto-Regular' size='5'>If you are <b>not working out</b> still or do not have any plans to.</font>"
        ],
        "program_main_features": [
          {
            "title": "",
            "subtitle": "",
            "value1": "<font face='Roboto-Regular' size='5'>Easy, Effective Diet Plans (10-day)</font>",
            "value2": "<font face='Roboto-Regular' size='5'>Periodic Calls with your Nutritionist</font>",
            "value3": "<font face='Roboto-Regular' size='5'>Unlimited in App Chat with Nutritionist</font>"
          },
          {
            "title": "",
            "subtitle": "",
            "value1": "<font face='Roboto-Regular' size='5'>Track your Goals & Milestones</font>",
            "value2": "<font face='Roboto-Regular' size='5'>BN Portion Control & 6 Guides</font>",
            "value3": "<font face='Roboto-Regular' size='5'>Weight, Inch & Photo Trackers</font>"
          },
          {
            "title": "",
            "subtitle": "",
            "value1": "<font face='Roboto-Regular' size='5'>1200+ In App Healthy BN Recipes</font>",
            "value2": "<font face='Roboto-Regular' size='5'>Create your Recipe Book In App</font>",
            "value3": "<font face='Roboto-Regular' size='5'>BN Wallet & Reward Points</font>"
          }
        ],
        "bank_details": [
          {
            "bank_name": "HDFC BANK",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          },
          {
            "bank_name": "AXIS BANK",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          },
          {
            "bank_name": "INDUSIND BANK",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          },
          {
            "bank_name": "STANDARD CHARTERED BANK",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          },
          {
            "bank_name": "BANK OF BARODA",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          },
          {
            "bank_name": "ICICI BANK",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          },
          {
            "bank_name": "KOTAK BANK",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          },
          {
            "bank_name": "YES BANK",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          },
          {
            "bank_name": "RATNAKAR BANK",
            "interest": [
              {"time": "3 Months", "interest": "0% per annum"},
              {"time": "6 Months", "interest": "0% per annum"},
              {"time": "9 Months", "interest": "0% per annum"},
              {"time": "18 Months", "interest": "0% per annum"},
              {"time": "24 Months", "interest": "0% per annum"}
            ]
          }
        ],
        "recommended_program": {
          "program_session_id": "81",
          "program_session_days": "90",
          "program_session_duration": "90 Day Program",
          "program_price_title": "Program Cost:",
          "program_price": "16999",
          "offer_blink": false,
          "offer_till": "0",
          "coupon_code": "",
          "program_discount_title": "Existing Discount",
          "program_discount": "0",
          "wallet_amount_title": "Wallet Discount:",
          "wallet_amount": "",
          "coupon_discount": false,
          "total_saving_amount_title": "*Total Savings:",
          "total_saving_amount": "0",
          "total_saving_percentage": "(0%)",
          "cost_without_coupon_title": "",
          "cost_without_coupon": "",
          "grand_total_title": "Grand Total:",
          "grand_total": "16999",
          "grand_total_sub_title": "",
          "show_grand_total": true,
          "coupon_code_applied_title": "",
          "coupon_code_applied_percent": "",
          "coupon_code_applied_amount": "",
          "offer_discount": "(0%)",
          "without_coupon_percent": "",
          "wallet_offer": 0,
          "coupon_offer": false,
          "coupon_discount_available": "",
          "coupon_code_available": "",
          "coupon_offer_text": "Discount Coupon Available:",
          "coupon_offer_button": "View Now",
          "auto_apply_coupon": false,
          "case_type": 1,
          "auto_apply_wallet": true,
          "coupon_discount_percentage": "10%"
        },
        "other_program": [
          {
            "program_session_id": "80",
            "program_session_days": "60",
            "program_session_duration": "60 Day Program",
            "program_price_title": "Program Cost:",
            "program_price": "13499",
            "offer_blink": false,
            "offer_till": "0",
            "coupon_code": "",
            "program_discount_title": "Existing Discount",
            "program_discount": "0",
            "wallet_amount_title": "Wallet Discount:",
            "wallet_amount": "",
            "coupon_discount": false,
            "total_saving_amount_title": "*Total Savings:",
            "total_saving_amount": "0",
            "total_saving_percentage": "(0%)",
            "cost_without_coupon_title": "",
            "cost_without_coupon": "",
            "grand_total_title": "Grand Total:",
            "grand_total": "13499",
            "grand_total_sub_title": "",
            "show_grand_total": true,
            "coupon_code_applied_title": "",
            "coupon_code_applied_percent": "",
            "coupon_code_applied_amount": "",
            "offer_discount": "(0%)",
            "without_coupon_percent": "",
            "wallet_offer": 0,
            "coupon_offer": false,
            "coupon_discount_available": "",
            "coupon_code_available": "",
            "coupon_offer_text": "Discount Coupon Available:",
            "coupon_offer_button": "View Now",
            "auto_apply_coupon": false,
            "case_type": 1,
            "auto_apply_wallet": true,
            "coupon_discount_percentage": "10%"
          },
          {
            "program_session_id": "82",
            "program_session_days": "120",
            "program_session_duration": "120 Day Program",
            "program_price_title": "Program Cost:",
            "program_price": "20499",
            "offer_blink": false,
            "offer_till": "0",
            "coupon_code": "",
            "program_discount_title": "Existing Discount",
            "program_discount": "0",
            "wallet_amount_title": "Wallet Discount:",
            "wallet_amount": "",
            "coupon_discount": false,
            "total_saving_amount_title": "*Total Savings:",
            "total_saving_amount": "0",
            "total_saving_percentage": "(0%)",
            "cost_without_coupon_title": "",
            "cost_without_coupon": "",
            "grand_total_title": "Grand Total:",
            "grand_total": "20499",
            "grand_total_sub_title": "",
            "show_grand_total": true,
            "coupon_code_applied_title": "",
            "coupon_code_applied_percent": "",
            "coupon_code_applied_amount": "",
            "offer_discount": "(0%)",
            "without_coupon_percent": "",
            "wallet_offer": 0,
            "coupon_offer": false,
            "coupon_discount_available": "",
            "coupon_code_available": "",
            "coupon_offer_text": "Discount Coupon Available:",
            "coupon_offer_button": "View Now",
            "auto_apply_coupon": false,
            "case_type": 1,
            "auto_apply_wallet": true,
            "coupon_discount_percentage": "10%"
          }
        ]
      };

        const response_data = {
            status: true,
            message: 'programs_details',
            last_visited_screen: 'program-details',
            // skip_assessment: skip_assessment,
            data: programs_data
        };

        return res.status(200).json(response_data);
    } catch (error) {
        console.error('Error in programDetails:', error);
        return res.status(500).json({ status: false, message: 'Internal server error' });
    }
};


