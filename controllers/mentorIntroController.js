export const getChatData = async (req, res) => {
    try {
      const response_data = {
      status: true,
      message: "chat messages",
      predefined_text: "",
      chat_webview_flag: 0,
      unread_message_count: 0,
      client_message: "",
      data: [
            {
              message_id: "7813051",
              message: "<font face=\"Roboto-Regular\" size=\"5\"><p>Hi Vivek,</p> <p>An important update, I have received your nutritional & health assessment as well as the ingredient availability list. We are now studying these & you will get your diet session 1 within the next 48 working hours. however, you may also get a few additional queries that I may ask you in order to send you an apt diet. Please answer them as without those answers <b>I will be unable to send you the session.</b> </p> <p>Is there anything else apart from the assessment that you want me to take into account? Please do write to me here.</p><p>(this message was pre-scheduled by mentor)</p></font>",
              from_name: "",
              seen_status: true,
              incoming_flag: 1,
              chat_date: "2023-12-07 13:20:23",
              attachments_list: [],
              attachment_path: "http://www.balancenutrition.in/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7811613",
              message: "",
              from_name: "",
              seen_status: true,
              incoming_flag: 1,
              chat_date: "2023-12-07 11:36:09",
              attachments_list: [
                  "196%20Nikitak%2001july.png"
                ],
              attachment_path: "http://www.balancenutrition.in/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7811612",
              message: "<font face=\"Roboto-Regular\" size=\"5\"><p>Hi Vivek,</p> <p>My name is Nikita & I am your mentor (nutritionist) for this program :) You may have read my qualifications & overall experience on the previous screen, attaching my digital ID for your reference too.</p> <p>Getting started, here are a few things we must always remember:</p> <p>1. Please ensure you get all <b>notifications</b> & act on them. They contain your reminders & other important messages.</p> <p>2. The <b>Diet sessions</b> sent to you are specially planned for you, so follow them as closely as possible. Your program results will depend on the same!</p> <p>3. The <b>Chat icon</b> is our communication window. We reply to every query personally & not automated, hence you may find a bit of a delay but please bear with me. I am trying to get you the best possible revert.</p> <p>4. The <b>E-kit</b> with all its guides makes up for <b>30% of the program success</b>, make sure you are taking a look at every guide especially the FAQs, Eat-in-portion guide, Daily-essentials guide & more.</p> <p><b>P.S -</b> Each time you get a notification that uses the word <b>'overdue'</b>, our program is compromised..So stay regular with your updates always :)</p> <p><b>P.P.S -</b> In case your having any issues with the app, please feel free to contact client services:  91 89280 01617 </p><p>(this message was pre-scheduled by mentor)</p></font>",
              from_name: "",
              seen_status: true,
              incoming_flag: 1,
              chat_date: "2023-12-07 11:36:09",
              attachments_list: [],
              attachment_path: "http://www.balancenutrition.in/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7740514",
              message: "",
              from_name: "",
              seen_status: true,
              incoming_flag: 0,
              chat_date: "2023-12-04 13:54:21",
              attachments_list: [
                  "04-12-2023-13-54-21_656d8cb5cf044_img_20231204_13:53:59_1081460308550469568.jpg"
                ],
              attachment_path: "http://www.balancenutrition.in/crm_ui/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7740491",
              message: "<font face=\"Roboto-Regular\" size=\"5\">hi</font>",
              from_name: "",
              seen_status: true,
              incoming_flag: 0,
              chat_date: "2023-12-04 13:49:36",
              attachments_list: [],
              attachment_path: "http://www.balancenutrition.in/crm_ui/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7739861",
              message: "<font face=\"Roboto-Regular\" size=\"5\"><p>Hi Vivek,</p> <p>An important update, I have received your nutritional & health assessment as well as the ingredient availability list. We are now studying these & you will get your diet session 1 within the next 48 working hours. however, you may also get a few additional queries that I may ask you in order to send you an apt diet. Please answer them as without those answers <b>I will be unable to send you the session.</b> </p> <p>Is there anything else apart from the assessment that you want me to take into account? Please do write to me here.</p><p>(this message was pre-scheduled by mentor)</p></font>",
              from_name: "",
              seen_status: true,
              incoming_flag: 1,
              chat_date: "2023-12-04 12:12:32",
              attachments_list: [],
              attachment_path: "http://www.balancenutrition.in/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7733577",
              message: "",
              from_name: "",
              seen_status: true,
              incoming_flag: 1,
              chat_date: "2023-12-02 14:52:36",
              attachments_list: [
                  "196%20Nikitak%2001july.png"
                ],
              attachment_path: "http://www.balancenutrition.in/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7733576",
              message: "<font face=\"Roboto-Regular\" size=\"5\"><p>Hi Vivek,</p> <p>My name is Nikita & I am your mentor (nutritionist) for this program :) You may have read my qualifications & overall experience on the previous screen, attaching my digital ID for your reference too.</p> <p>Getting started, here are a few things we must always remember:</p> <p>1. Please ensure you get all <b>notifications</b> & act on them. They contain your reminders & other important messages.</p> <p>2. The <b>Diet sessions</b> sent to you are specially planned for you, so follow them as closely as possible. Your program results will depend on the same!</p> <p>3. The <b>Chat icon</b> is our communication window. We reply to every query personally & not automated, hence you may find a bit of a delay but please bear with me. I am trying to get you the best possible revert.</p> <p>4. The <b>E-kit</b> with all its guides makes up for <b>30% of the program success</b>, make sure you are taking a look at every guide especially the FAQs, Eat-in-portion guide, Daily-essentials guide & more.</p> <p><b>P.S -</b> Each time you get a notification that uses the word <b>'overdue'</b>, our program is compromised..So stay regular with your updates always :)</p> <p><b>P.P.S -</b> In case your having any issues with the app, please feel free to contact client services:  91 89280 01617 </p><p>(this message was pre-scheduled by mentor)</p></font>",
              from_name: "",
              seen_status: true,
              incoming_flag: 1,
              chat_date: "2023-12-02 14:52:36",
              attachments_list: [],
              attachment_path: "http://www.balancenutrition.in/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7733479",
              message: "",
              from_name: "",
              seen_status: true,
              incoming_flag: 1,
              chat_date: "2023-12-02 14:27:50",
              attachments_list: [
                  "196%20Nikitak%2001july.png"
                ],
              attachment_path: "http://www.balancenutrition.in/file/client/",
              read_status: true,
              is_auto_message: false
            },
            {
              message_id: "7733478",
              message: "<font face=\"Roboto-Regular\" size=\"5\"><p>Hi Vivek,</p> <p>My name is Nikita & I am your mentor (nutritionist) for this program :) You may have read my qualifications & overall experience on the previous screen, attaching my digital ID for your reference too.</p> <p>Getting started, here are a few things we must always remember:</p> <p>1. Please ensure you get all <b>notifications</b> & act on them. They contain your reminders & other important messages.</p> <p>2. The <b>Diet sessions</b> sent to you are specially planned for you, so follow them as closely as possible. Your program results will depend on the same!</p> <p>3. The <b>Chat icon</b> is our communication window. We reply to every query personally & not automated, hence you may find a bit of a delay but please bear with me. I am trying to get you the best possible revert.</p> <p>4. The <b>E-kit</b> with all its guides makes up for <b>30% of the program success</b>, make sure you are taking a look at every guide especially the FAQs, Eat-in-portion guide, Daily-essentials guide & more.</p> <p><b>P.S -</b> Each time you get a notification that uses the word <b>'overdue'</b>, our program is compromised..So stay regular with your updates always :)</p> <p><b>P.P.S -</b> In case your having any issues with the app, please feel free to contact client services:  91 89280 01617 </p><p>(this message was pre-scheduled by mentor)</p></font>",
              from_name: "",
              seen_status: true,
              incoming_flag: 1,
              chat_date: "2023-12-02 14:27:50",
              attachments_list: [],
              attachment_path: "http://www.balancenutrition.in/file/client/",
              read_status: true,
              is_auto_message: false
            }
        ]
    }
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in programDetails:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };
  
  export const meetYourMentor = async (req, res) => {
    try {
      const response_data = {
          status: true,
          message: "Mentor Intro",
          last_visited_screen: "mentor-intro",
          notification_count: {
              icon_flag: "read",
              count: 0
            },
          unread_chat_badge: 0,
          data: ""
        };
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in meetYourMentor:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };
  
  export const mentorMessage = async (req, res) => {
    try {
      const response_data = {
    status: true,
    message: "'s Message",
    last_visited_screen: "message-from-mentor",
    unread_chat_badge: 0,
    notification_count: {
        icon_flag: "read",
        count: 0
    },
    title_text: "Your program  ( Days) comprises of:",
    features_array: [
      "<font face='Roboto-Regular' size='5'> Diet Charts</font>",
      "<font face='Roboto-Regular' size='5'>Weight & Other Trackers</font>",
      "<font face='Roboto-Regular' size='5'>The BN E- kit & BN Maintenance Guide</font>",
      "<font face='Roboto-Regular' size='5'>BN Recipes & Guides</font>",
      "<font face='Roboto-Regular' size='5'>Mentor Chat </font>"
    ],
    is_cleanse: 0,
    data: {
      video_code: "Jsqpc5LZP6w",
      diet_sent: 0,
      session: 0,
      diet_id: 0,
      mentor_name: "",
      mentor_photo: "https://www.balancenutrition.in/images/avatar.png",
      unread_chat_badge: 0,
      age: 11
    }
};
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in programDetails:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };
  
  export const whatWeAnalyse = async (req, res) => {
    try {
      const response_data = {};
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in programDetails:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };
  
  export const fastingWindow = async (req, res) => {
    try {
      const response_data = {
      status: true,
      message: "Fasting Window",
      assessment_id: "22485",
      form_data: "",
      fastingValue: "",
      eating_start_time: "",
      eating_end_time: "",
      unread_chat_badge: 0,
      mentor_assigned: false
    };
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in fastingWindow:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };
  
  export const eKitList = async (req, res) => {
    try {
      const response_data = {
     status: true,
     message: "ekit list",
     assigned_mentor: "No",
     last_visited_screen: "e-kit",
     program_status_show: 0,
     show_ekit: 0,
     diet_id: null,
     diet_session: "Diet Session ",
     data: [
            {
             id: "1413",
             order_id: null,
             e_kit_name: "BN Restaurant Guide",
             view: "0",
             access_status: "0",
             ekit_url: "https://www.balancenutrition.in/show-ekit/MjczNzk=/53c8a5fbdb41e481370dc58a2e3a8bd9/ekit-restaurant-guide",
             ekit_image: "https://www.balancenutrition.in/bn-api-new/images/ekit/restaurant_guide.png",
             short_description: "This guide enables you to eat out whether at a party, movie, wedding or a holiday.",
             ekit_id: "3",
             ekit_show_cleanse: 0
            },
            {
             id: "1411",
             order_id: null,
             e_kit_name: "BN Daily Essentials",
             view: "0",
             access_status: "1",
             ekit_url: "https://www.balancenutrition.in/show-ekit/MjczNzk=/53c8a5fbdb41e481370dc58a2e3a8bd9/ekit-daily-essentials",
             ekit_image: "https://www.balancenutrition.in/bn-api-new/images/ekit/daily_essentials.png",
             short_description: "How much sugar, which oil & many other questions like these are answered in this guide.",
             ekit_id: "1",
             ekit_show_cleanse: 0
            },
            {
             id: "1412",
             order_id: null,
             e_kit_name: "BN Eat In Portions",
             view: "0",
             access_status: "0",
             ekit_url: "https://www.balancenutrition.in/show-ekit/MjczNzk=/53c8a5fbdb41e481370dc58a2e3a8bd9/ekit-eat-in-portions",
             ekit_image: "https://www.balancenutrition.in/bn-api-new/images/ekit/eat_n_portions.png",
             short_description: "The backbone of your program. It teaches you portions of food that you have to consume at a time.",
             ekit_id: "2",
             ekit_show_cleanse: 0
            },
            {
             id: "1414",
             order_id: null,
             e_kit_name: "BN Frequently Asked Question",
             view: "0",
             access_status: "0",
             ekit_url: "https://www.balancenutrition.in/show-ekit/MjczNzk=/53c8a5fbdb41e481370dc58a2e3a8bd9/ekit-faqs",
             ekit_image: "https://www.balancenutrition.in/bn-api-new/images/ekit/bn_faq.png",
             short_description: "This is a mini-mentor on your phone, with answers to most of your queries.",
             ekit_id: "4",
             ekit_show_cleanse: 0
            }
        ]
    };
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in programDetails:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };
  