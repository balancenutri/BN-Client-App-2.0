export const saveHealthScore = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Save health score data",
      data: {
        health_score_id: 0,
        hs_report_flag: "1",
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in saveHealthScore:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const generateHealthScoreReport = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Get health score report data",
      unread_chat_flag: 0,
      data: {
        health_score_id: "36022",
        other_category: "UNDERWEIGHT",
        weight: "70.1",
        ideal_weight: "71",
        extra_weight: "0.90",
        bg_color: "#6abf32",
        text_category: "Normal",
        bmi: "22.17",
        ideal_bmi: "22.46",
        color: "#6abf32",
        percentage: 49,
        color_img: "#ffa500",
        interpretation_text: [
          {
            interpretation_content:
              "You are at a stage where your weight & health are calling out for some care & attention.",
          },
          {
            interpretation_content:
              "Your weight especially needs attention & even if you reduce it by 10%, you will see a big difference in your health parameters.",
          },
        ],
        mentor_name: "",
        mentor_photo: "https://www.balancenutrition.in/images/avatar.png",
        what_should_text: [
          {
            what_should_val:
              '<span style="font-size:19px; font-family: Roboto-Regular;">Start with a diet & lifestyle plan, even if it is a short term one. You can also start with a 1 Day <a href="https://www.balancenutrition.in/cleanse-program" style="color: #007bff !important;text-decoration:underline !important;"><b>BN Cleanse Plan</b></a> or the <a href="https://www.balancenutrition.in/my-time-diet-time" style="color: #007bff !important;text-decoration:underline !important;"><b>10 day Diet Plan</b></a></span>',
          },
          {
            what_should_val:
              '<span style="font-size:19px; font-family: Roboto-Regular;">Drink <b>12 glasses</b> of water, have only 1 tsp. <b>visible sugar</b> each day, 1 fruit & 1 raw vegetable a day.</span>',
          },
          {
            what_should_val:
              '<span style="font-size:19px; font-family: Roboto-Regular;">Speak to our <b> </b> @: <a href="tel:+91"><b></b></a> who can help you with a personalized diet plan.</span>',
          },
        ],
        weight_color: "#6abf32",
        weight_category: "UNDERWEIGHT",
        ideal_weight_color: "#6abf32",
        bmi_category: "Normal",
        bmi_color: "#ffa500",
        cleanse_id: "112",
        ten_day_id: "117",
        health_score_date: "2023-07-10",
        share_healthscore_url:
          "http://www.balancenutrition.in/share-health-score-report/client/24348",
        banner_image_url:
          "https://www.balancenutrition.in/images/what_we_analyse.png",
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in saveHealthScore:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};
