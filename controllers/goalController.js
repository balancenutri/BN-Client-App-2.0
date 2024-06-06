export const viewGoals = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Goal data",
      data: {
        tailend_hs: true,
        hs_report_flag: "1",
        rate_us: false,
        book_a_call: false,
        restrict_user: false,
        marquee_text: {
          text: "Why should you continue with us? Click Here to find out",
          redirect: "redirect_url",
          redirect_id: "https://youtu.be/eI-n56gvnwM",
        },
        unread_chat: 0,
        is_image: "No",
        profile_image: "",
        first_name: " ",
        mentor_name: null,
        mentor_phone: null,
        healthscore_id: 0,
        away_ideal_bmi: null,
        away_ideal_weight: null,
        away_ideal_healthscore: 100,
        user_type: 1,
        program_one: {
          program_id: "34",
          program_name: "Body Transformation",
          program_icon:
            "https://www.balancenutrition.in/images/programs/checkout/bt.png",
          program_features: [
            "Body Toning",
            "High Metabolic Diets",
            "Fat loss Superfoods",
            "Diets high in Protein",
          ],
        },
        program_two: {
          program_id: "92",
          program_name: "Reform Intermittent",
          program_icon:
            "https://www.balancenutrition.in/images/programs/checkout/default.png",
          program_features: [
            "Advanced Diet Plans",
            "Time-Based Eating",
            "Sustained Weight Loss",
            "Easy To Maintain",
          ],
        },
        start_weight: "65.250",
        current_weight: "",
        target_weight: 0,
        screen_type: 1,
        user_id: null,
        order_id: null,
        user_name: null,
        program_validity: null,
        program_expire_days: "-19880 Days",
        advanceProgram: false,
        advance_program_name: null,
        advance_program_start_date: null,
        set_advance_program_date: false,
        ideal_weight: "62",
        milestones_achieved: [],
        unachieved_goals: [],
        goal_achieved: [],
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in viewGoals:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};


  export const addGoals = async (req, res) => {
    try {
      const response_data = {
        status: true,
        message: "Goals added successfully",
      };

      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in addGoals:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };

  export const editGoals = async (req, res) => {
    try {
      const response_data = {
        status: true,
        message: "Goals updated successfully",
      };

      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in editGoals:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };