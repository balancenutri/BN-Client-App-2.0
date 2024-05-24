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
          message: "Personal Details",
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

export const nutritionLifestyleAnalysis = async (req, res) => {
    let responseData;
    responseData = {
      status: true,
      message: "nutrition and lifestyle data",
      assessment_id: "22485",
      reform_question: 0,
      form_data: [
            {
              id: "182",
              asid: "22485",
              new_asid: "0",
              user_id: "27379",
              current_status: "",
              occupation: "",
              job_type: "",
              job_time: "",
              job_hour: "",
              job_meal: "",
              meal_quantity: "",
              play_time: "",
              tution_time: "",
              act_class: "",
              meal_type: "",
              canteen: "",
              job_travel: "",
              travel_inmonth: "",
              travel_country: "",
              lifestyle: "",
              eating_habit: "",
              fnonveg: "",
              pmeat: "",
              smoke: "",
              smoke_habit: "",
              alcohol: "",
              alco_frequency: "",
              alco_intake: "",
              drink_preference: "",
              water_intake: "",
              pastpro: "",
              diet: "",
              exercise: "",
              fast: "",
              visit_hotel: "",
              cuisine: "",
              whocook_meal: "",
              brunch: "",
              facility: "",
              options: "",
              eater: "",
              hunger: "",
              activity: "",
              child_prefer: "",
              kadha_booster: "",
              food_aversion: "",
              food_preference: "",
              ex: "",
              cardio: "",
              cardio_duration: "",
              cardio_frequency: "",
              cardio_time: "",
              weight_training_frequency: "",
              weight_training_duration: "",
              weight_training_time: "",
              yoga: "",
              yoga_duration: "",
              yoga_frequency: "",
              yoga_time: "",
              arobic: "",
              arobic_duration: "",
              arobic_frequency: "",
              arobic_time: "",
              swim: "",
              swim_duration: "",
              swim_frequency: "",
              swim_time: "",
              walk: "",
              walk_duration: "",
              walk_frequency: "",
              walk_time: "",
              jogging: "",
              jogging_duration: "",
              jogging_frequency: "",
              jogging_time: "",
              other: "",
              other_duration: "",
              other_frequency: "",
              other_time: "",
              no_of_cigarettes: "",
              alco_frequency_other: "",
              do_you_fast: "",
              fast_other: "",
              whocook_meal_any_other: "",
              meals_other: "",
              hunger_2: "",
              job_end_time: "",
              other_smoke_habit: "",
              other_no_of_cigarettes: "",
              canteen_2: "",
              canteen_3: "",
              canteen_4: "",
              other_job_type: "",
              other_occupation: "",
              trademil_frequency: "",
              trademil_frequency_other: "",
              trademil_duration: "",
              trademil_time: "",
              eliptical_frequency: "",
              eliptical_frequency_other: "",
              eliptical_duration: "",
              eliptical_time: "",
              gym_cycle_frequency: "",
              gym_cycle_frequency_other: "",
              gym_cycle_duration: "",
              gym_cycle_time: "",
              cycling_frequency: "",
              cycling_frequency_other: "",
              cycling_duration: "",
              cycling_time: "",
              weight_training: "",
              other_exercise: "",
              dance_frequency: "",
              dance_frequency_other: "",
              dance_duration: "",
              dance_time: "",
              zumba_frequency: "",
              zumba_frequency_other: "",
              zumba_duration: "",
              zumba_time: "",
              skipping_frequency: "",
              skipping_frequency_other: "",
              skipping_duration: "",
              skipping_time: "",
              pilates_frequency: "",
              pilates_frequency_other: "",
              pilates_duration: "",
              pilates_time: "",
              other_workout_name: "",
              other_workout_frequency: "",
              any_other_workout_frequency: "",
              other_workout_duration: "",
              other_workout_time: "",
              visit_hotel_other: "",
              fasting_food: "",
              egg_frequency: "",
              activity_other: "",
              jogging_frequency_other: "",
              swim_frequency_other: "",
              yoga_frequency_other: "",
              walk_frequency_other: "",
              weight_training_frequency_other: "",
              other_cuisine: "",
              cardio_frequency_other: "",
              food_allergy: "",
              fasting_window: "",
              any_other_allergy: "",
              sleep_time: "",
              consumption_of_fruits: "",
              sleep_duration: "",
              other_workout_specification: "",
              gluten_product_allergy: "",
              lactose_product_allergy: "",
              other_milk_product_allergy: "",
              other_wheat_product_allergy: "",
              any_other_meal: "",
              any_other_cuisine: "",
              breakfast: "",
              lunch: "",
              dinner: "",
              indian: "",
              chinese: "",
              continental: "",
              lactose: "",
              gluten: "",
              soya: "",
              peanuts: "",
              reform_question: 0
            }
        ]
    }
  return res.status(200).json(responseData);
}

export const twentyFourHourDietRecall = async (req, res) => {
    let responseData;
    responseData = {
      status: true,
      message: "diet recall data",
      assessment_id: "22485",
      sleep_time: "",
      wakeup_time: "",
      breakfast_compulsory: 1,
      lunch_compulsory: 1,
      tea_compulsory: 1,
      dinner_compulsory: 1,
      form_data: [
            {
              recall_name: "Breakfast",
              image_icon_color: "blue",
              mandatory: 1,
              time: "",
              menu: "",
              time_key: "break_time",
              menu_key: "break_menu",
              placeholder: "e.g. poha/upma/bread-jam/milk and cereal, etc."
            },
            {
              recall_name: "Mid Morning",
              image_icon_color: "blue",
              mandatory: 0,
              time: null,
              menu: null,
              time_key: "midmorning_time",
              menu_key: "midmorning_menu",
              placeholder: "e.g. fruits/smoothies/juices/salads/savoury snacks, etc."
            },
            {
              recall_name: "Lunch",
              image_icon_color: "blue",
              mandatory: 1,
              time: null,
              menu: null,
              time_key: "lunch_time",
              menu_key: "lunch_menu",
              placeholder: "e.g. roti/rice+dal/pav bhaji/paneer sabji, etc."
            },
            {
              recall_name: "Tea / Evening",
              image_icon_color: "blue",
              mandatory: 1,
              time: null,
              menu: null,
              time_key: "tea_time",
              menu_key: "tea_menu",
              placeholder: "e.g. sandwitch/burger/samosas, etc."
            },
            {
              recall_name: "Late Evening",
              image_icon_color: "blue",
              mandatory: 0,
              time: null,
              menu: null,
              time_key: "lateve_time",
              menu_key: "lateve_menu",
              placeholder: "e.g. pop corn/potato chips/biscuits/cookies, etc."
            },
            {
              recall_name: "Dinner",
              image_icon_color: "blue",
              mandatory: 1,
              time: null,
              menu: null,
              time_key: "dinner_time",
              menu_key: "dinner_menu",
              placeholder: "e.g. roti/paratha/rice/dal/paneer sabji, etc."
            },
            {
              recall_name: "Bed Time / Midnight Munching (If Any)",
              image_icon_color: "blue",
              mandatory: 0,
              time: null,
              menu: null,
              time_key: "bed_time",
              menu_key: "bed_menu",
              placeholder: "e.g. ice-creams/faluda/mung halwa/juice, etc."
            }
        ]
    }
  return res.status(200).json(responseData);
}


export const foodFrequency = async (req, res) => {
    let responseData;
    responseData = {
      status: true,
      message: "food frequency data",
      assessment_id: "22485",
      eating_habit: "Vegetarian",
      form_data: [
            {
              foodname: "Pizza / Burger",
              key: "pizza_freq",
              food_example: "",
              mandatory: "",
              food_type: "Vegetarian",
              other_food_type: "Non Vegetarian",
              other_food_type_2: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              other_food_type_3: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              spinnerdata: ""
            },
            {
              foodname: "Biscuits / Cookies",
              key: "biscuit_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Roti / Chapati",
              key: "chapati_freq",
              food_example: "",
              mandatory: 1,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Chaat",
              key: "chaat_freq",
              food_example: "[Bhel, Sev Puri, Chips, Sev, Pakoda, Etc.]",
              mandatory: 1,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Rice",
              key: "rice_freq",
              food_example: "",
              mandatory: 1,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Bread / Pav",
              key: "bread_freq",
              food_example: "",
              mandatory: 1,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Paneer",
              key: "paneer_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Cheese",
              key: "cheese_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Indian Mithai",
              key: "mithai_freq",
              food_example: "[Milk-Free If Vegan]",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Fruits",
              key: "fruit_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Fried Snacks",
              key: "fried_freq",
              food_example: "[Eg. Chips, Sev, Pakoda, Etc.]",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Nuts / Dry Fruits",
              key: "nuts_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Aerated Beverages / Juices",
              key: "breverage_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Tea",
              key: "tea_freq",
              food_example: "[Regular/Black/Green]",
              mandatory: 1,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Coffee",
              key: "cofee_freq",
              food_example: "[Regular/Black]",
              mandatory: 1,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Breakfast Cereal",
              key: "cereal_freq",
              food_example: "[Oats/Muesli/Wheat Flakes/Corn Flakes]",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Seafood",
              key: "seafood_freq",
              food_example: "[Eg. Lobster, Crabs Etc.]",
              mandatory: 0,
              food_type: "Non Vegetarian",
              other_food_type: "Non Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Non Vegetarian",
              spinnerdata: ""
            },
            {
              foodname: "Fish",
              key: "fish_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Non Vegetarian",
              other_food_type: "Non Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Non Vegetarian",
              spinnerdata: ""
            },
            {
              foodname: "Chicken",
              key: "chicken_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Non Vegetarian",
              other_food_type: "Non Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Non Vegetarian",
              spinnerdata: ""
            },
            {
              foodname: "Mutton",
              key: "mutton_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Non Vegetarian",
              other_food_type: "Non Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Non Vegetarian",
              spinnerdata: ""
            },
            {
              foodname: "Beef",
              key: "beef_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Non Vegetarian",
              other_food_type: "Non Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Non Vegetarian",
              spinnerdata: ""
            },
            {
              foodname: "Pork",
              key: "pork_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Non Vegetarian",
              other_food_type: "Non Vegetarian",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Non Vegetarian",
              spinnerdata: ""
            },
            {
              foodname: "Eggs",
              key: "egg_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Non Vegetarian",
              other_food_type: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Non Vegetarian",
              spinnerdata: ""
            },
            {
              foodname: "Midnight Snacks",
              key: "midnight_freq",
              food_example: "[Eg. Popcorn, Chiwda, Chakli, Etc.]",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            },
            {
              foodname: "Western Desserts & Ice-Cream",
              key: "dessert_freq",
              food_example: "",
              mandatory: 0,
              food_type: "Vegetarian",
              other_food_type: "Vegan (No Non-Veg, No Dairy, Only Plant Based Foods)",
              other_food_type_2: "Non Vegetarian",
              other_food_type_3: "Ovo-Vegetarian (Vegetarian Eating Eggs)",
              spinnerdata: ""
            }
        ]
    }
  return res.status(200).json(responseData);
}