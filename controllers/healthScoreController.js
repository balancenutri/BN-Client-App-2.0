export const saveHealthScore = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Save health score data",
      data: { 
        health_score_id: 0, 
        hs_report_flag: "1",
        }
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in saveHealthScore:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};
