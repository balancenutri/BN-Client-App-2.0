export const assessmentList = async (req, res) => {
    let responseData;
    responseData = {
        
          status: true,
          message: "assessment list",
          assessment_id: "22485",
          client_number: "8928001617",
          last_visited_screen: "assessment/1",
          assessment_status: 0,
          medical_issue: "0",
          data: [
                {
                  name: "Personal Details",
                  status: "2"
                },
                {
                  name: "Nutrition & Lifestyle Analysis",
                  status: "2"
                },
                {
                  name: "24 Hour Diet Recall",
                  status: "1"
                },
                {
                  name: "Food Frequency",
                  status: "2"
                },
                {
                  name: "Upload Photo",
                  status: "2"
                },
                {
                  name: "Medical History",
                  status: "2"
                },
                {
                  name: "Note To Mentor & Khyati",
                  status: "2"
                }
            ]
        
    };
  return res.status(200).json(responseData);
}