export const sideBarMenu = async (req, res) => {
    try {
       
        const response_data = {
          status : true,
          message : "Dynamic Sidebar Menu",
          program_name : "WEIGHT LOSS +",
          program_status : "(Expired)",
          action_type : "Start Again",
          current_sessions : 0,
          ios_app_version : "1.0.83",
          android_app_version : "74",
          data : {
              first_tab : [
                    {
                      title : "Khyati’s Message",
                      sub_array : [],
                      screen_name : "welcome_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "My BN Rewards",
                      sub_array : [
                            {
                              title : "BN Wallet",
                              sub_array : [],
                              screen_name : "bn_wallet",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Refer A Friend",
                              sub_array : [],
                              screen_name : "refer-a-friend",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Diet & Progress Trackers",
                      sub_array : [
                            {
                              title : "Diet",
                              sub_array : [],
                              screen_name : "diet_list",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Weight Tracker",
                              sub_array : [],
                              screen_name : "weight_tracker",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Inch Tracker",
                              sub_array : [],
                              screen_name : "inch_tracker",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Photo Tracker",
                              sub_array : [],
                              screen_name : "photo_tracker",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "My Recipe Book",
                      sub_array : [],
                      screen_name : "recipe_book",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "BN Maintenance",
                      sub_array : [],
                      screen_name : "maintenance",
                      action_type : "New",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Know Your Mentor Nikita",
                      sub_array : [],
                      screen_name : "mentor_intro_info",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "My Assessment",
                      sub_array : [],
                      screen_name : "assessment_view",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Ingredient Check List",
                      sub_array : [],
                      screen_name : "ingredient_check_list_view",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    }
                ],
              second_tab : [
                    {
                      title : "Reform Intermittent",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "(Most Recommended)",
                      program_id : "92",
                      health_score_id : ""
                    },
                    {
                      title : "Body Transformation",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "(Recommended)",
                      program_id : "34",
                      health_score_id : ""
                    },
                    {
                      title : "Weight Loss Pro",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "",
                      program_id : "35",
                      health_score_id : ""
                    },
                    {
                      title : "Beat PCOS",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "",
                      program_id : "36",
                      health_score_id : ""
                    },
                    {
                      title : "Weight Loss +",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "",
                      program_id : "37",
                      health_score_id : ""
                    },
                    {
                      title : "Plateau Breaker",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "",
                      program_id : "75",
                      health_score_id : ""
                    },
                    {
                      title : "ReNeU",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "",
                      program_id : "108",
                      health_score_id : ""
                    },
                    {
                      title : "Active",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "",
                      program_id : "38",
                      health_score_id : ""
                    },
                    {
                      title : "SlimPossible60",
                      sub_array : [],
                      screen_name : "AdvanceProgram",
                      action_type : "",
                      program_id : "134",
                      health_score_id : ""
                    },
                    {
                      title : "SlimSmart30",
                      sub_array : [],
                      screen_name : "slim_smart_program",
                      action_type : "",
                      program_id : "73",
                      health_score_id : ""
                    },
                    {
                      title : "BN Cleanse Plans",
                      sub_array : [
                            {
                              title : "How To Prepare",
                              sub_array : [],
                              screen_name : "how_to_prepare",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Why Should I Try A Cleanse?",
                              sub_array : [],
                              screen_name : "why_should_try_cleanse",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Who Should Try It?",
                              sub_array : [],
                              screen_name : "who_should_try_it",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Benefits Of Cleanse",
                              sub_array : [],
                              screen_name : "benefits_of_a_cleanse",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Package Inclusions",
                              sub_array : [],
                              screen_name : "package_inclusions",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Post-Festive Detox",
                              sub_array : [],
                              screen_name : "allCleanse",
                              action_type : "",
                              program_id : "131",
                              health_score_id : ""
                            },
                            {
                              title : "Weight Loss",
                              sub_array : [],
                              screen_name : "allCleanse",
                              action_type : "",
                              program_id : "112",
                              health_score_id : ""
                            },
                            {
                              title : "Sugar Detox",
                              sub_array : [],
                              screen_name : "allCleanse",
                              action_type : "",
                              program_id : "113",
                              health_score_id : ""
                            },
                            {
                              title : "Flat Stomach",
                              sub_array : [],
                              screen_name : "allCleanse",
                              action_type : "",
                              program_id : "114",
                              health_score_id : ""
                            },
                            {
                              title : "Acidity Correction",
                              sub_array : [],
                              screen_name : "allCleanse",
                              action_type : "",
                              program_id : "115",
                              health_score_id : ""
                            },
                            {
                              title : "Immune Boosting",
                              sub_array : [],
                              screen_name : "allCleanse",
                              action_type : "",
                              program_id : "116",
                              health_score_id : ""
                            },
                            {
                              title : "Constipation Correction",
                              sub_array : [],
                              screen_name : "allCleanse",
                              action_type : "",
                              program_id : "121",
                              health_score_id : ""
                            },
                            {
                              title : "10 Day Diet Plan",
                              sub_array : [],
                              screen_name : "10dayDietPlan",
                              action_type : "",
                              program_id : "117",
                              health_score_id : ""
                            },
                            {
                              title : "10 Day Intermittent Fasting",
                              sub_array : [],
                              screen_name : "10dayIntermittentFasting",
                              action_type : "",
                              program_id : "118",
                              health_score_id : ""
                            },
                            {
                              title : "Shape-Up",
                              sub_array : [],
                              screen_name : "shape_up",
                              action_type : "",
                              program_id : "119",
                              health_score_id : ""
                            },
                            {
                              title : "Transform (Weight Loss)",
                              sub_array : [],
                              screen_name : "transform",
                              action_type : "",
                              program_id : "120",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    }
                ],
              third_tab : [
                    {
                      title : "Success Stories",
                      sub_array : [],
                      screen_name : "webview",
                      action_type : "",
                      program_id : "https://www.balancenutrition.in/weight-loss-testimonials",
                      health_score_id : ""
                    },
                    {
                      title : "How We Work",
                      sub_array : [],
                      screen_name : "webview",
                      action_type : "",
                      program_id : "https://www.balancenutrition.in/how-online-weight-management-programs-works",
                      health_score_id : ""
                    },
                    {
                      title : "Meet Khyati",
                      sub_array : [],
                      screen_name : "meet_khyati",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "About Us",
                      sub_array : [
                            {
                              title : "About Us",
                              sub_array : [],
                              screen_name : "webview",
                              action_type : "",
                              program_id : "https://www.balancenutrition.in/about-us-online-nutrition-counselling",
                              health_score_id : ""
                            },
                            {
                              title : "Our Journey",
                              sub_array : [],
                              screen_name : "webview",
                              action_type : "",
                              program_id : "https://www.balancenutrition.in/balancenutrition-journey",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "BN Gyaan",
                      sub_array : [
                            {
                              title : "Healthy Recipes",
                              sub_array : [],
                              screen_name : "recipes",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Health Reads",
                              sub_array : [],
                              screen_name : "blogs",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Videos",
                              sub_array : [],
                              screen_name : "app_videos",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Media",
                      sub_array : [],
                      screen_name : "media_section",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "My BN E-Kit",
                      sub_array : [
                            {
                              title : "BN Restaurant Guide",
                              sub_array : [],
                              screen_name : "webview",
                              action_type : "",
                              program_id : "https://www.balancenutrition.in/show-ekit/MTM1MDY=/1b6ecbfc4a3961d74ccc580ddb377dd4/ekit-restaurant-guide",
                              health_score_id : ""
                            },
                            {
                              title : "BN Daily Essentials",
                              sub_array : [],
                              screen_name : "webview",
                              action_type : "",
                              program_id : "https://www.balancenutrition.in/show-ekit/MTM1MDY=/1b6ecbfc4a3961d74ccc580ddb377dd4/ekit-daily-essentials",
                              health_score_id : ""
                            },
                            {
                              title : "BN Eat In Portions",
                              sub_array : [],
                              screen_name : "webview",
                              action_type : "",
                              program_id : "https://www.balancenutrition.in/show-ekit/MTM1MDY=/1b6ecbfc4a3961d74ccc580ddb377dd4/ekit-eat-in-portions",
                              health_score_id : ""
                            },
                            {
                              title : "BN Alcohol Guide",
                              sub_array : [],
                              screen_name : "webview",
                              action_type : "",
                              program_id : "https://www.balancenutrition.in/show-ekit/MTM1MDY=/1b6ecbfc4a3961d74ccc580ddb377dd4/ekit-alcohol-guide",
                              health_score_id : ""
                            },
                            {
                              title : "BN Frequently Asked Question",
                              sub_array : [],
                              screen_name : "webview",
                              action_type : "",
                              program_id : "https://www.balancenutrition.in/show-ekit/MTM1MDY=/1b6ecbfc4a3961d74ccc580ddb377dd4/ekit-faqs",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    }
                ],
              fourth_tab : [
                    {
                      title : "Allow Notifications",
                      sub_array : [],
                      screen_name : "allow_notification",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Current Program Details & Validity",
                      sub_array : [],
                      screen_name : "validity_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Help & Support",
                      sub_array : [
                            {
                              title : "Client Services",
                              sub_array : [],
                              screen_name : "client_services",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Terms & Privacy Policy",
                              sub_array : [],
                              screen_name : "webview",
                              action_type : "",
                              program_id : "https://www.balancenutrition.in/terms-and-policy",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Personal Info & Passwords",
                      sub_array : [
                            {
                              title : "Personal Info",
                              sub_array : [],
                              screen_name : "personal_info",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Passwords",
                              sub_array : [],
                              screen_name : "change_password",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "History",
                      sub_array : [
                            {
                              title : "My Order History",
                              sub_array : [],
                              screen_name : "order_history",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Assessment History",
                              sub_array : [],
                              screen_name : "assessment_view",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            },
                            {
                              title : "Ingredient Check List History",
                              sub_array : [],
                              screen_name : "checklist",
                              action_type : "",
                              program_id : "",
                              health_score_id : ""
                            }
                        ],
                      screen_name : "sub_screen",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Updates",
                      sub_array : [],
                      screen_name : "update_app",
                      action_type : "New",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "App Version",
                      sub_array : [],
                      screen_name : "app_version",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Logout",
                      sub_array : [],
                      screen_name : "logout_app",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    },
                    {
                      title : "Deactivate Account",
                      sub_array : [],
                      screen_name : "deactivate_account",
                      action_type : "",
                      program_id : "",
                      health_score_id : ""
                    }
                ]
            }
        }

        return res.status(200).json(response_data);
    } catch (error) {
        console.error('Error in sideBarMenu:', error);
        return res.status(500).json({ status: false, message: 'Internal server error' });
    }
};