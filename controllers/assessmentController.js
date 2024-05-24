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

export const personalDetails = async (req, res) => {
    let responseData;
    responseData = {
        
          status: true,
          message: "assessment list",
          assessment_id: "22485",
          form_data: {
                
                  id: "199",
                  asid: "22485",
                  user_id: "13506",
                  name: "Rahil Shaikh",
                  email_id: "8898121797@balancenutrition.in",
                  mobile_no: "8898121797",
                  address: "",
                  country: "",
                  state: "",
                  city: "",
                  birth_date: "",
                  gender: "",
                  caste: "",
                  age: "",
                  asses_photo: "",
                  weight: "",
                  height: "",
                  goal_weight: "",
                  other_goal: "",
                  school_time: "",
                  recess_time: "",
                  school_days: "",
                  martial_status: "",
                  family: "",
                  no_children: "",
                  breast_feed: "",
                  excl_breastfeed: "",
                  age_child1: "",
                  age_child2: "",
                  age_child3: "",
                  ass_attachment: "",
                  is_correct: "0",
                  created: "",
                  edit_right: "0",
                  medi: "",
                  ass_mail: "0000-00-00 00:00:00",
                  change_url: "",
                  age_child4: "",
                  age_child5: "",
                  child_status: "",
                  other_caste: "",
                  breast_feed_freq: "",
                  breast_feed_other_freq: "",
                  breast_feed_food: "",
                  body_type: "",
                  is_pregnant: "",
                  pregnancy_month: "",
                  anniversary_date: "",
                  dummy: "",
                  country_name: "",
                  state_name: "",
                  city_name: "",
                  weight_in_kg: "",
                  weight_in_gm: "0",
                  goal_weight_in_kg: "",
                  goal_weight_in_gm: "0",
                  height_in_feet: "",
                  height_in_inch: "0",
                  goal_weight_start: 40
                
          }
    };
  return res.status(200).json(responseData);
}