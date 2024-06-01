export const dietList = async (req, res) => {
    try {
      const response_data = {
     status: true,
     message: "diet_list",
     data: {
         program_name: "",
         cleanse_diet_pdf: 0,
         active_prog_diet_id: "",
         total_session: null,
         pending_session: 0,
         order_id: "",
         balance_amount: "",
         add_session: 1,
         request_maintenance: 0,
         already_maintenance: 0,
         maintenance_received: 0,
         pause_program: "",
         pause_session: 0,
         diet_list: [],
         diet_flag: "Inactive",
         cleanse_show: "Hide",
         program_status: "2",
         previous_diet: 0
        }
    };
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in dietList:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };

  export const dietDetails = async (req, res) => {
    try {
      const response_data ={
     status: true,
     message: "diet_details",
     last_visited_screen: "my-profile",
     data: {
         mentor_photo: "https://www.balancenutrition.in/images/avatar.png",
         diet_id: "93866084",
         show_button: "7",
         tracker_popup: "7",
         msg: "<p>Hi Vivek,</p>\r\n\r\n<p>PFA your Session 1 diet.</p>\r\n\r\n<p>Don&rsquo;t forget to update your trackers on day 6 &amp; day 11 and inform me when you start this session.</p>\r\n\r\n<p>Do write to me on the chat bot for your queries regarding the session &amp; I shall answer them soon.</p>\r\n",
         msg_color: "#01ADC3",
         diet_details_title: [
                {
                 diet_title: "<b>ON RISING:</b>",
                 diet_description: "<font face='Roboto-Regular' size='3'><p>1 tsp cinnamon powder + 1 glass of warm water<br />\r\n<br />\r\n<strong>[Cinnamon is loaded with powerful antioxidants, such as polyphenols, which protect the body from oxidative damage caused by free radicals.]</strong><br />\r\n<br />\r\n<strong>OR</strong><br />\r\n<br />\r\n1 tsp wheatgrass powder + 1 glass of warm water<br />\r\n<br />\r\n<strong>[Wheatgrass stimulates the thyroid glands, which helps in speeding up the metabolism. This helps overcome obesity, indigestion, and other problems relating to a slow metabolism.]</strong></p>\r\n</font>"
                },
                {
                 diet_title: "PRE BREAKFAST:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p><strong>It is essential to have your breakfast within an hour of waking up, or else, have a fruit.</strong></p>\r\n\r\n<p><strong>&nbsp;</strong></p>\r\n</font>"
                },
                {
                 diet_title: "BREAKFAST:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p><strong>PLEASE SEE THE BREAKFAST HABIT OF THE CLIENT - DO NOT BLINDLY GIVE A HEAVY BREAKFAST</strong></p>\r\n\r\n<p>1 cup tea or coffee as per your habit / 1 cup skim or nut milk <strong>[as per your choice] </strong>+</p>\r\n\r\n<p><strong>[Do refer to the &lsquo;daily essentials guide&rsquo; of the E-kit for the quantity of sugar to be consumed]</strong>&nbsp;</p>\r\n\r\n<p>1 bowl sugar-free muesli with milk<strong>&nbsp;[add chopped fruits] [Brand: HARVEST CRUNCH / BAGRRY&%2339;S] /</strong>&nbsp;1&nbsp;bowl fruity oats&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/938\" target=\"_blank\">[View recipe]</a>&nbsp;[Use fruits of your choice, preferably seasonal fruits][Low-fat milk]&nbsp;-THRICE IN THIS SESSION</strong></p>\r\n\r\n<p><strong>[OATS/MUESLI:&nbsp;Rich in fiber, and increases feelings of fullness, helps to lower the blood sugar levels]</strong></p>\r\n\r\n<p><strong>[You can use any oats/ muesli recipe on the app]</strong></p>\r\n\r\n<p><strong>[Do refer to the FAQs of the E-kit for the quantity of muesli to be added]</strong></p>\r\n\r\n<p><strong>OR</strong><br />\r\n<br />\r\n2 green moong dal chillas&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/789\">[View recipes]</a></strong>&nbsp;/ 2 besan pancakes with sprouts&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/634\">[View recipes]</a>[Size of CD]&nbsp;</strong>+ 2 tbsp mint coriander chutney&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/188\">[View recipes]</a> [avoid coconut chutney] </strong>+ 1 apple&nbsp;</p>\r\n\r\n<p><strong>[Make the batter/chutney in bulk and store for 2-3 days]<br />\r\n<br />\r\nOR</strong></p>\r\n\r\n<p>1 bowl power poha&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/199\" target=\"_blank\">[View recipes]</a>[Squeeze lime]&nbsp;</strong>/ 1 bowl mix sevaiyya upma&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/633\" target=\"_blank\">[View recipes]</a>&nbsp;[add lots of veggies] [Squeeze lime] </strong>+ 1 katori dahi wali chutney&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/dahiwali-chutney\">[View recipe]</a>&nbsp;+ 2 slices papaya</p>\r\n\r\n<p><strong>[You can also refer to any upma / poha recipes on the app]</strong></p>\r\n\r\n<p><strong>[Vegetables&nbsp;being rich in fiber will help us feel full and also will improve digestion]</strong></p>\r\n</font>"
                },
                {
                 diet_title: "MID MORNING:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p><strong>Compulsory to avoid long meal gap&nbsp;</strong></p>\r\n\r\n<p>1 mug green tea / 1 mug&nbsp;spiced iced tea&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/552\">[View recipes]</a></strong></p>\r\n\r\n<p><em><strong>[GREEN TEA: Burns fat by boosting metabolism]</strong></em></p>\r\n</font>"
                },
                {
                 diet_title: "LUNCH:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p><strong>PLEASE SEE THE LUNCHES FROM NIKET NRI [OUTSIDE MEALS] IF THE CLIENT IS WORKING FROM THE OFFICE</strong></p>\r\n\r\n<p>1 bowl salad&nbsp;<strong>[no creamy dressings][any salad of your choice using simple veggies]</strong>&nbsp;[<strong>you can toss cucumber, beets,lettuce, tomatoes, cabbage etc &amp; add lime &amp; pepper to it] [no potato - it is not a sabzi] /</strong>&nbsp;1 bowl sabzi&nbsp;<strong>[spinach, turai, tendli, methi etc] [refer recipes or cook in your style in low oil]&nbsp;</strong>+ 1 wheat oats roti&nbsp;<strong>[make oats powder at home and add 1 tsp while kneading the dough]<a href=\"https://www.balancenutrition.in/recipes/recipe-details/473\">[View recipes]</a></strong>&nbsp;/ 1 multigrain roti<strong>&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/472\">[View recipes]</a></strong>&nbsp;+ 1 bowl dal<strong> [avoid sugar, too much tadka or oil]</strong>&nbsp;/ 1 bowl pulse like moong, matki, chana etc <strong>&nbsp;[low in oil]&nbsp;[You can also refer to any recipes of dal/ pulse on the App]</strong><br />\r\n<br />\r\n<strong>OR</strong><br />\r\n<br />\r\n1 cucumber &amp;&nbsp;tomato sliced&nbsp;+ 1 bowl plain brown rice / 1 bowl dalia khichdi&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/330\">[View recipes]</a> [add lots of veggies]&nbsp;</strong>+ 1 bowl dal&nbsp;<strong>[refer any dal recipe from app recipe section]&nbsp;</strong>/ 1 bowl dahi kadhi&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/323\">[View recipes]</a></strong></p>\r\n\r\n<p><strong><strong>[Ideal Meal with adequate fiber, carbs, and protein]</strong></strong><br />\r\n<br />\r\n<strong>NOTE:<br />\r\n&middot; Kindly visit the recipe section on the App and choose recipes for sabzi, dals, veg recipes, and many more!<br />\r\n&middot; They are all very healthy and tasty!</strong></p>\r\n</font>"
                },
                {
                 diet_title: "TEA EVENING:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p>1 cup tea / 1 cup coffee / 1 cup green tea +&nbsp;</p>\r\n\r\n<p>1 bowl popped makhana&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/609\" target=\"_blank\">[View recipes]</a>&nbsp;</strong>/ 1 bowl healthy cereal chivda&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/210\" target=\"_blank\">[View recipes]</a></strong></p>\r\n\r\n<p><strong>[make the snack in bulk for 6-7 days][can also refer to other healthy snack options from the website]&nbsp;</strong></p>\r\n\r\n<p><strong>[Avoid biscuits, cookies&nbsp; - yes even the low-fat healthy ones]</strong></p>\r\n\r\n<p><br />\r\n<strong>NOTE</strong>:<br />\r\n<strong>Kindly refer to your Daily Essentials Guide to learn, &%2339;how much sugar&%2339; is allowed for use and to also know which fruits you can consume!</strong></p>\r\n</font>"
                },
                {
                 diet_title: "LATE EVENING:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p><strong>[Only if the client is used to eating]</strong></p>\r\n\r\n<p>1 fruit + 1 tbsp sunflower seeds</p>\r\n\r\n<p><em><strong>[Pumpkin and sunflower seeds are rich in selenium,&nbsp;</strong></em><strong><strong>omega-3 fatty acids. It also improves digestive health and helps in weight loss]</strong></strong></p>\r\n\r\n<p>&nbsp;</p>\r\n</font>"
                },
                {
                 diet_title: "PRE DINNER:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p>1 tsp jeera seeds powder&nbsp; + 1 glass&nbsp;of warm water&nbsp;&nbsp;<strong>[have 20 minutes before dinner]&nbsp;</strong></p>\r\n\r\n<p><em><strong>[Aids in the digestion process]</strong></em></p>\r\n</font>"
                },
                {
                 diet_title: "DINNER:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p>1 bowl vegetable soup&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/255\">[View recipes]</a></strong>&nbsp;/ 1 bowl lentil soup<strong>&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/986\">[View recipes]</a>&nbsp;[can make the soup in quantity and store for 2-3 days]&nbsp;</strong>+ 1 corn paneer sandwich<strong>&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/1237\">[View recipes]</a>&nbsp;</strong>/ 1 healthy veggie sandwich&nbsp;<strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/861\">[View recipes]</a></strong></p>\r\n\r\n<p><strong>[use 2 slices of whole wheat or multigrain bread slices only, no cheese, no butter, no mayo, no ketchup, and add lots of veggies]</strong></p>\r\n\r\n<p><strong>[IF BELOW 75 KG, PLEASE CHANGE THIS TO 1 OPEN TOAST]<br />\r\n<br />\r\nOR</strong></p>\r\n\r\n<p>1 bowl salad <strong>[no creamy dressings] </strong>/ 1 bowl green sabzi <strong>[any fresh green vegetable sabzi like cabbage, cauliflower, mutter - cook in your style in low oil] [or refer the app]&nbsp;</strong>+ 1 mix veg paratha<strong> </strong><a href=\"https://www.balancenutrition.in/recipes/recipe-details/472\" style=\"text-decoration:none\"><strong>[View recipes]</strong></a> / 1 methi thepla <a href=\"https://www.balancenutrition.in/recipes/recipe-details/methi-thepla\">[View recipe]</a>/&nbsp; 1 katori plain brown rice/ 1 bowl dalia khichadi&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/dalia-khichdi\">[View recipe]</a> + 1 bowl dal <strong>[low oil, same as lunch]</strong> / 1 bowl mix veg raita&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/vegetable-raita\">[View recipe]</a><br />\r\n<br />\r\nYou can have this option as:<strong> (Any 1 combo at a time)</strong><br />\r\n<strong>1. Salad + khichadi + raita<br />\r\n2. Sabzi + paratha + dal /raita<br />\r\n3. salad/sabzi + plain brown rice + dal&nbsp;</strong><br />\r\n<br />\r\n<strong>OR</strong></p>\r\n\r\n<p><strong>MENTOR TO SEE IN ASSESSMENT WHAT CUISINE CLIENT LIKES AND ADD</strong><br />\r\n<br />\r\n<strong>CHINESE </strong><br />\r\n1 bowl stir-fried veggies <a href=\"https://www.balancenutrition.in/recipes/recipe-details/stir-fry-vegetables\">[View recipe]</a><strong>&nbsp;[add 3 tbsp sprouts to this]&nbsp;/ </strong>1 bowl paneer chilly <a href=\"https://www.balancenutrition.in/recipes/recipe-details/new-paneer-chilli\">[View recipe]</a><strong>&nbsp;+</strong> 1 bowl brown rice fried rice&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/brown-rice-fried-rice\">[View recipe]</a> &nbsp;/ 1 bowl veg noodles<strong> [use multigrain noodles if possible &amp; ensure 50% of the dish has veggies in it]&nbsp;/ </strong>1 whole wheat pasta in red sauce&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/red-sauce-whole-wheat-pasta\">[View recipe]</a> [<strong>add loads of veggies]</strong><br />\r\n<br />\r\n<strong>GUJJU</strong><br />\r\n1 bowl soup from lunch + 6 pcs moong dhokla&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/moong-dhokla\">[View recipe]</a><strong>&nbsp;/</strong> 6 pcs green peas dhokla <a href=\"https://www.balancenutrition.in/recipes/recipe-details/green-peas-dhokla\">[View recipe]</a><strong>/ </strong>6 pcs cabbage jowar muthiya&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/cabbage-jowar-muthia\">[View recipe]</a>&nbsp;<strong>&nbsp;</strong>+ 1 katori dahi wali chutney <a href=\"https://www.balancenutrition.in/recipes/recipe-details/dahiwali-chutney\">[View recipe]</a><strong>/</strong> 2 tbsp tomato garlic chutney&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/tomato-garlic-chutney\">[View recipe]</a><br />\r\n<br />\r\n<strong>SOUTH INDIAN</strong><br />\r\n2 green moong dal chillas from breakfast&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/tomato-garlic-chutney\">[View recipe]</a><strong>&nbsp;/ </strong>2 multigrain dosa&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/multigrain-dalia-dosa\">[View recipe]</a><strong>[Size of CD]&nbsp;</strong>&nbsp;/ 2 ragi idlis&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/ragi-vegetable-idli\">[View recipe]</a>&nbsp;+ 1 bowl sambar&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/sambar\">[View recipe]</a> / 1 bowl rasam <a href=\"https://www.balancenutrition.in/recipes/recipe-details/rasam\">[View recipe]</a>&nbsp;+ 2 tbsp mint chutney&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/mint-coriander-chutney\">[View recipe]</a></p>\r\n\r\n<p><strong>[AVOID COCONUT CHUTNEY]</strong></p>\r\n\r\n<p><strong>IF YOU NEED TO ADD 1 LOW CARB OPTION&nbsp;</strong></p>\r\n\r\n<p>1 bowl of salad <strong>[no creamy dressing][You can choose healthy leafy salad&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/healthy-leafy-salad\">[View recipe]</a>&nbsp;/ 1 bowl Greek salad&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/greek-salad\">[View recipe]</a> from the app] </strong>+ 1 paneer moong chilla&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/paneer-moong-chilla\">[View recipe]</a>&nbsp;/ 1 besan pancake with vegetables&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/besan-oats-pancakes-with-vegetables-easy-to-prepare\">[View recipe]</a>&nbsp;/ 1&nbsp;green moong dal chilla&nbsp;<a href=\"https://www.balancenutrition.in/recipes/recipe-details/tomato-garlic-chutney\">[View recipe]</a>&nbsp;&nbsp;+ 2 tbsp mint coriander chutney&nbsp;<strong>[from breakfast]</strong>&nbsp;+ 1 glass of buttermilk&nbsp;<strong>[no salt]</strong></p>\r\n\r\n<p><strong>[3 TIMES THIS SESSION]</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n</font>"
                },
                {
                 diet_title: "BED TIME:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p>1 tsp saunf&nbsp;+ 1 tsp ajwain + 1 glass of warm water</p>\r\n\r\n<p><em><strong>[Carom and fennel seeds&nbsp;help your body release digestive juices which can make digestion&nbsp;better]</strong></em></p>\r\n\r\n<p><strong>OR</strong></p>\r\n\r\n<p>1 tsp Himalaya Triphala powder / 1 Triphala tablet&nbsp; + 1 glass of warm water</p>\r\n\r\n<p><em><strong>[Triphala offers great support to the digestive system and helps in ensuring that the process of digestion is completed at its best. It also ensures the optimal working of the digestive tract.]</strong></em></p>\r\n</font>"
                },
                {
                 diet_title: "DIET NOTE:",
                 diet_description: "<font face='Roboto-Regular' size='3'><p><strong>PURPOSE OF THE DIET:<br />\r\n<br />\r\n&middot; This being our &nbsp;1st diet, our aim is to keep the food pattern as close to normal as possible.<br />\r\n<br />\r\n&middot; This will allow you to build confidence in the plan and also the ON RISING / MID MORNING / BEDTIME superfoods will help you lose weight, so make sure you do not miss them.<br />\r\n<br />\r\n&middot; You can view all the recipes in the Recipe Section of the website.<br />\r\n<br />\r\n&middot; In case you feel hungry, do let us know.<br />\r\n<br />\r\n&middot; Drink 8-10 glasses of water every day.<br />\r\n<br />\r\n&middot; Avoid long gaps between meals.<br />\r\n<br />\r\n&middot; All the best!</strong><br />\r\n<br />\r\n<strong>P.S. This diet is tailor-made for YOU &amp; your better health. Please do not share it with anybody as it can impact their well being.</strong></p>\r\n</font>"
                }
            ],
         attachment: [],
         image: [],
         order_id: null,
         start_date: "2023-12-06",
         end_date: "2023-12-16",
         current_session: "1",
         days_pending: 168,
         page_title: "Diet Session 1",
         show_button_2: null,
         default_start_date: "",
         calender_start_date: "5",
         advance_program_order_id: "",
         day_number: 4,
         start_date_overdue: false,
         client_new_goals: null,
         suggested_program1: "Body Transformation",
         suggested_program2: "Reform Intermittent",
         adv_purchase_program: "",
         adv_purchase_start_date: "1970-01-01",
         start_now_redirect: "weight tracker",
         start_now_auto_text: "",
         break_ended_days: 19875,
         break_end_date: "1970-01-01",
         mid_session_date: "<font face='Roboto-Regular' size='5'><b>11<sup>th</sup> Dec</b></font>",
         session_start_date: "<font face='Roboto-Regular' size='5'>6<sup>th</sup> Dec 23</font>",
         session_end_date: "<font face='Roboto-Regular' size='5'>16<sup>th</sup> Dec 23</font>",
         end_session_date: "<font face='Roboto-Regular' size='5'><b>16<sup>th</sup> Dec</b></font>",
         days_till_now: 178,
         session_ended_days: 168,
         upper_message_type: "4",
         onhold_timestamp: false,
         view_maintenance: false,
         start_weight: "85",
         current_weight: "75.52",
         ideal_weight: "70",
         away_from_ideal_weight: "8",
         mentor_name: null,
         show_half_time_info: false,
         offer_redirect_screen: "program_suggestion_new",
         offer_redirect_id: "75",
         offer_client_auto_text: "this is client auto text",
         offer_mentor_auto_text: "this is mentor auto text",
         diet_upper_section: {
             title: "<font face='Roboto-Regular' size='5' style='text-allign:center;'><b><u>Weight Update <span style='color:red;'>OverDue</span>:</u></b></font>",
             start_date: "",
             end_date: "",
             description: "",
             marquee_text: {
                 text: "<font face='Roboto-Regular' size='5'>Your end-session weight update is <b>Overdue</b>! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; You had to update your weight <span style='color:red;'><b>168 days ago</b></span>. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; You will lose out on program validity if you don’t add your weight ASAP.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style='color:blue;'><u>Click here</u></span> to update your weight now!</font>",
                 redirect_page: "Weight tracker",
                 redirect_id: "",
                 mentor_auto_text: "",
                 client_auto_text: ""
                }
            }
        }
    };
  
      return res.status(200).json(response_data);
    } catch (error) {
      console.error("Error in dietList:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal server error" });
    }
  };