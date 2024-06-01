export const chatWithMentor = async (req, res) => {
    try {
      const response_data = {}
  
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
      const response_data = {};
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in programDetails:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };
  
  export const mentorMessage = async (req, res) => {
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
  
  export const eKit = async (req, res) => {
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
  