export const homeScreen = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Home Screen",
      data: {
        page_title: "",
        notification_count: "0",
        user_type: 1,
        upper_section: {
          upper_section_image: "",
          camera_visibility: true,
          title: "What We Analysed",
          description: "Know what your assessment report tells us.",
          button_text: "Know More",
          redirect_screen: "health-analysed",
          redirect_id: null,
          phone_number: null,
          default_start_date: null,
          calender_date: null,
          calender_start_date: null,
          auto_text: null,
        },
        program_status_section: {
          section_id: 25,
          title: "Program & Session Status:",
          button_1_text: "Increase Validity",
          button_1_redirect_screen: "client_services",
          button_2_text: null,
          button_2_redirect_screen: "",
          text_data: "Your current program  expires in:",
          text_data1: "-19880",
          timer: "",
          left_button_text: "",
          left_button_redirect_screen: "",
          right_button_text: "",
          right_button_redirect_screen: "",
          total_sessions: null,
          completed_sessions: "0",
          pending_sessions: "0",
          to_do_image: false,
          program_status_image: "",
          default_start_date: "",
          order_id: null,
          calender_start_date: 3,
          auto_text: "program_expired",
          whatsapp_no: null,
          whatsapp_automessage: "hello whats up",
          onhold_date_timestamp: "",
          calender_date: "2024-06-06",
        },
        trackers_and_ekit_section: {
          title: "Diets, Trackers & BN Guides",
          color: "#EDFEFF",
          trackers_and_ekit: [
            {
              top_name: "Old",
              bottom_name: "Diets",
              redirect_id: "",
              image:
                "https://www.balancenutrition.in/bn-api-new/images/ekit/dashboard-ekit/diet_chart_new.png",
              notification_flag: false,
              redirect_page: "diet list",
            },
            {
              top_name: "Restaurant",
              bottom_name: "Guide",
              redirect_id:
                "https://www.balancenutrition.in/show-ekit/MjczNzk=/d41d8cd98f00b204e9800998ecf8427e/ekit-restaurant-guide",
              image:
                "https://www.balancenutrition.in/bn-api-new/images/ekit/dashboard-ekit/restaurant_guide.png",
              notification_flag: true,
              redirect_page: "inAppWebView",
            },
            {
              top_name: "Frequent",
              bottom_name: "Queries",
              redirect_id:
                "https://www.balancenutrition.in/show-ekit/MjczNzk=/d41d8cd98f00b204e9800998ecf8427e/ekit-faqs",
              image:
                "https://www.balancenutrition.in/bn-api-new/images/ekit/dashboard-ekit/bn_faq.png",
              notification_flag: true,
              redirect_page: "inAppWebView",
            },
            {
              top_name: "Daily",
              bottom_name: "Essentials",
              redirect_id:
                "https://www.balancenutrition.in/show-ekit/MjczNzk=/d41d8cd98f00b204e9800998ecf8427e/ekit-daily-essentials",
              image:
                "https://www.balancenutrition.in/bn-api-new/images/ekit/dashboard-ekit/daily_essentials.png",
              notification_flag: true,
              redirect_page: "inAppWebView",
            },
            {
              top_name: "Eat In",
              bottom_name: "Portions",
              redirect_id:
                "https://www.balancenutrition.in/show-ekit/MjczNzk=/d41d8cd98f00b204e9800998ecf8427e/ekit-eat-in-portions",
              image:
                "https://www.balancenutrition.in/bn-api-new/images/ekit/dashboard-ekit/eat_n_portions.png",
              notification_flag: true,
              redirect_page: "inAppWebView",
            },
          ],
        },
        tab_bar_section: {
          wallet_log_badge: 0,
          unread_chat_badge: 0,
          my_goals_badge: 0,
        },
        fasting_notification: {
          fasting_start: "",
          fasting_end: "",
        },
        weight_comparison_section: null,
        weight_and_bmi_report: null,
        other_option_section: null,
        suggested_program_section: null,
        popup_section: null,
        omr_popup: 0,
        advance_program_order_id: 0,
        order_id: null,
        force_update: 1,
        display_pop_up: 1,
        offer_title:
          "<font face='Roboto-Regular' size='5'><center><b>14-Day Online Fitness Challenge</b></center></font>",
        offer_description:
          "<font face='Roboto-Regular' size='5'><center>Burn <b>200-300 calories</b> extra each day with the online fitness challenge! <br><b>Registrations End: 9th June</b></center></font>",
        offer_image:
          "https://www.balancenutrition.in/images/app_images/percentage.png",
        offer_button1: "Know More",
        offer_button2: "Not Now",
        offer_button1_redirect_screen: "forteen_day_fitness_program",
        offer_button1_redirect_id: "1",
        offer_button2_redirect_screen: "close_popup",
        offer_button2_redirect_id: "0",
        offer_mentor_autotext: null,
        offer_client_autotext: "",
        new_android_version: "136",
        mentor_photo: "https://www.balancenutrition.in/images/avatar.png",
        mentor_full_name: "M/s. ",
        faq_url:
          "https://www.balancenutrition.in/show-ekit/MTI0MzM=/90824e3c7fbdca28219650fd126f585d/ekit-faqs",
        wmr_notifications: [
          {
            type: "notification_5th_pre",
            notification_date: "2023-12-11",
            notification_time: "07:00",
            title: "Weight Update Due!",
            description:
              "It's time for your mid-session weight update. Ensure you record the weight empty-stomach & using the same weighing scale.",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_5th_post",
            notification_date: "2023-12-11",
            notification_time: "19:00",
            title: "Weight Update Over Due!",
            description:
              "You had to fill in your weight this morning. Please update it empty stomach to stay regular with your program progress!",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_7th_pre",
            notification_date: "2023-12-13",
            notification_time: "07:00",
            title: "Weight Update Missed!",
            description:
              "You missed updating your weight mid session. The tracker is now open only for 12 hours. Fill it now!",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_7th_post",
            notification_date: "2023-12-13",
            notification_time: "19:00",
            title: "Important Update From Mentor",
            description:
              "You missed updating your weight mid session. The tracker is now open only for 12 hours. Fill it now!",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_10th_pre",
            notification_date: "2023-12-16",
            notification_time: "07:00",
            title: "WMR 10th Day Pre",
            description: "Fill Your 5th Day Weight",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_10th_post",
            notification_date: "2023-12-16",
            notification_time: "19:00",
            title: "WMR 10th Day Post",
            description: "Fill Your 5th Day Weight",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_12th_pre",
            notification_date: "2023-12-18",
            notification_time: "07:00",
            title: "WMR 12th Day Pre",
            description: "Fill Your 5th Day Weight",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_12th_post",
            notification_date: "2023-12-18",
            notification_time: "19:00",
            title: "WMR 12th Day Post",
            description: "Fill Your 5th Day Weight",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_14th_day",
            notification_date: "2023-12-20",
            notification_time: "19:00",
            title: "WMR 14th Day",
            description: "Fill Your 5th Day Weight",
            redirect: "weight_tracker",
            send_notification: false,
          },
          {
            type: "notification_17th_day",
            notification_date: "2023-12-23",
            notification_time: "19:00",
            title: "WMR 17th Day",
            description: "Fill Your 5th Day Weight",
            redirect: "weight_tracker",
            send_notification: false,
          },
        ],
        in_app_notifications: [],
        maintenance_status: false,
        balance_popup: null,
        is_goal_button_enabled: false,
        restrict_section: {
          restrict_title: "End-Session Weight Overdue",
          restrict_message: "End-session 1 weight update is overdue",
          restrict_button_text: "Update Now",
          restrict_popup_image:
            "https://www.balancenutrition.in/bn-api-new/images/program_status/programStatus_weighingScale.png",
          restrict_button_redirect_screen: "weight_tracker",
          restrict_button_redirect_id: "",
          restrict_button_mentor_autotext: "Mentor Auto Text",
          restrict_button_client_autotext: "Client Auto Text",
          restrict_popup_status: false,
        },
        marquee_text: {
          marquee_color: "#03989F",
          text: "<font face='Roboto-Regular' size='5'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have you registered for the 14-day fitness challenge?  Get flat <b>75% Off until Sunday!</b> <b>Click here</b> to Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </font>",
          redirect_page: "forteen_day_fitness_program",
          redirect_id: "241",
        },
        isRenewal: false,
        isRenwalIMF: false,
        program_name: "",
        is_ocr_client: true,
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in homeScreen:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};


export const notificationList = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Notification List",
      data: [
        {
          id: "18567543",
          notification_flag: "0",
          navigation_title: "",
          title: "Would you like BN to have exercise plans?",
          description:
            "In addition to diet plans, would you also be happy to receive exercise advice from us? Click here ",
          redirect_page: "mentor chat",
          redirect_data:
            "redirect_id=0,order_id=49678,diet_session_value=Diet Session 0",
          redirect_url: "",
          added_date: "1 day ago",
        },
        {
          id: "18564545",
          notification_flag: "1",
          navigation_title: "",
          title: "Your diet session is delivered!",
          description: "Your mentor has sent you your diet plan, click here",
          redirect_page: "diet-details",
          redirect_data:
            "redirect_id=2147483647,order_id=49678,diet_session_value=Diet Session 1",
          redirect_url: "",
          added_date: "2 days ago",
        },
      ],
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in notificationList:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};