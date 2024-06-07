export const weightTrackerList = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Weight Tracker List",
      data: {
        button_show: "Yes",
        program_name: "",
        goal: "55 kg",
        weight_tracker_list: [],
        unread_chat_flag: 0,
        total_weight_loss: "0kg",
        pop_up_title: "Weight Already Received!",
        pop_up_text1: "Your next weight update is due in a few days.",
        pop_up_text2: "You shall be notified for the same in advance.",
        pop_up_button: "Ok",
        ok_button_mentor_chat: "weight_update_received_okay",
        close_button_mentor_chat: "weight_update_received_okay",
        ok_button_client_chat: "This is weight update received ok",
        close_button_client_chat: "This is weight update received close",
        year: "(2024)",
        fill_start_weight: "NO",
        UnlockMaintenance: 3,
        advanceProgram: false,
        auto_text: "Hi,I would like to know about the current offers",
        mentor_contact: "+91 ",
        weightloss_text:
          "<font face='Roboto-Regular' size='5'><center>You did not <b>lose</b> any weight in this program</center></font>",
        weightloss_type: 3,
        weight_tracker_back_pop_up: {
          pop_up_title: "Are You Sure?",
          pop_up_description:
            "We can not send you a new diet until you fill your current weight.",
          pop_up_button: "Update Now",
        },
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in weightTrackerList:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const inchTrackerList = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Inch Tracker List",
      unread_chat_flag: 0,
      data: {
        mentor_photo: "https://www.balancenutrition.in/images/avatar.png",
        button_show: "No",
        program_name: null,
        accurate_measurement_video_key: "4U56FpjvteM",
        unread_chat_flag: 0,
        inchloss_list: [],
        pop_up_title: "Your Inch Tracker Is Already Updated",
        pop_up_text1:
          "You have already entered your start inch measurements. Your next update is due after you finish your first diet session.",
        pop_up_text2: "",
        pop_up_button: "Ok",
        year: "(2024)",
        fill_start_inch: "NO",
        inch_tracker_back_pop_up: {
          pop_up_title: "",
          pop_up_description: "",
          pop_up_button1: "",
          pop_up_button2: "",
        },
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in inchTrackerList:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const photoTrackerList = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "before after photo tracker",
      unread_chat_flag: 0,
      data: {
        mentor_photo: "https://www.balancenutrition.in/images/avatar.png",
        total_weight_loss: null,
        unread_chat_flag: 0,
        before_photo:
          "https://www.balancenutrition.in/images/assessment/27379/cropped8884306223721148002.jpg",
        after_photo:
          "https://www.balancenutrition.in/bn-api-new/images/after.png",
        button_show: "No",
        pop_up_title: null,
        pop_up_text1: null,
        pop_up_text2: null,
        pop_up_button: null,
        photo_tracker_back_pop_up: {
          pop_up_title: "",
          pop_up_description: "",
          pop_up_button1: "",
          pop_up_button2: "",
        },
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in photoTrackerList:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};


