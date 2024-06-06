export const getRecipeBookChapters = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Chapter List",
      new_to_recipe_book: 0,
      new_chapter_id: 0,
      data: [
        {
          chapter_id: "17635",
          chapter_name: "Dal recipees",
          created_by: "24645",
          created_date: "2023-03-24 20:45:16",
          updated_by: "0",
          updated_date: "2023-03-24 15:15:16",
          is_deleted: "0",
          deleted_date: "2023-03-24 15:15:16",
        },
      ],
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in recipeBookChapters:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const recipeList = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "recipes_list",
      total_recipes: "113",
      total_recipes_count: 113,
      chapter_id: "1",
      last_recipe_id: "43572",
      last_recipe_title: "EGG WHITE FRITTATA",
      new_to_recipe_book: 0,
      food_type: [
        {
          title: "Non Veg",
          selected_image:
            "https://www.balancenutrition.in/images/food_type/non_veg_selected.png",
          not_selected_image:
            "https://www.balancenutrition.in/images/food_type/non_veg_notselected.png",
        },
        {
          title: "Ove-veg",
          selected_image:
            "https://www.balancenutrition.in/images/food_type/ove-veg_selected.png",
          not_selected_image:
            "https://www.balancenutrition.in/images/food_type/ove-veg_notselected.png",
        },
        {
          title: "Ovo-veg",
          selected_image:
            "https://www.balancenutrition.in/images/food_type/ovo-veg_selected.png",
          not_selected_image:
            "https://www.balancenutrition.in/images/food_type/ovo-veg_notselected.png",
        },
        {
          title: "Veg",
          selected_image:
            "https://www.balancenutrition.in/images/food_type/veg_selected.png",
          not_selected_image:
            "https://www.balancenutrition.in/images/food_type/veg_notselected.png",
        },
        {
          title: "Vegan",
          selected_image:
            "https://www.balancenutrition.in/images/food_type/vegan_selected.png",
          not_selected_image:
            "https://www.balancenutrition.in/images/food_type/vegan_notselected.png",
        },
      ],
      data: [
        {
          recipe_id: "368",
          title: "Oats Upma",
          category: "Breakfast",
          subcategory: "POHA AND UPMA",
          cuisine: "Gujarati",
          type: "Veg",
          health_meter:
            "Eating oats provide an array of health benefits. High in soluble fiber and beta-glucan, oats make the perfect, easy to make breakfast recipe. It is low in calories and also wholesome. Adding vegetables such as green peas, carrot and french beans makes it more perfect. It plays role in maintaining weight.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1653297436_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1159",
          title: "Chia And Berry Fruit Pudding Parfait",
          category: "Breakfast",
          subcategory: "PORRIDGES-PARFAITS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "This power packed recipe is rich in energy, cool in nature, &amp; provides with all the nutrients that are necessary to combat the heat. Milk and chia provide with a good amount of protein and berries provide with a good amount of vitamins, minerals, and antioxidants. All in one cup, a perfect dessert to serve.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1495256157_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "199",
          title: "Power Poha (easy To Prepare)",
          category: "Breakfast",
          subcategory: "POHA AND UPMA",
          cuisine: "Maharashtrian",
          type: "Veg",
          health_meter:
            "Poha is a great source of iron, adding sprouts to it will also improve its protein content. Iron is well absorbed in our body in the presence of vitamin C, squeezing lemon on top will improve the iron absorption. \r\n",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1685693368_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "947",
          title: "Energy Booster Drink",
          category: "Supplements",
          subcategory: "ALL",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Drinking fluids before and after exercise is important to replace lost fluids or to maintain it. Good hydration enables mental alertness [improves the ability to concentrate]. Lemon helps in fighting infections as well as cleanse the kidney. Also, by reducing bloating and inflammation this drink will give a good dose of vitamin C.\r\n\r\n",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1481970762_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "827",
          title: "Sweet Pongal ",
          category: "Desserts",
          subcategory: "ALL",
          cuisine: "South Indian",
          type: "Veg",
          health_meter:
            "Brown rice is a good source of minerals such as magnesium, phosphorus, selenium, thiamin, niacin and vitamin B6 and manganese. Brown rice is high in fibre is known to aid in weight loss. Moong dal adds on to its protein content. Dates are rich in several vitamins, fibre, minerals, calcium, iron, potassium, phosphorous, manganese, copper and magnesium which are all beneficial for health. Addition of Flax seed will make it healthier as they shall provide us good fats essential for the body. Raisin and dates are natural sweeteners.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1459748357_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "183",
          title: "Green Moong Dosa With Flaxseeds",
          category: "Breakfast",
          subcategory: "DOSAS AND UTTAPAMS",
          cuisine: "South Indian",
          type: "Veg",
          health_meter:
            "This recipe combines the best of south Indian snacks with the goodness of the whole moong, resulting in a wholesome and filling snack option. the use of the whole moong offers nutritious benefits. which is rich in fiber content helps in lower cholesterol level. flax seeds are the richest source of omega-3-fatty acids. it is full of healthy fats and fiber. &nbsp;",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1434007675_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1011",
          title: "Vermicelli Or Seviyan Upma",
          category: "Breakfast",
          subcategory: "POHA AND UPMA",
          cuisine: "Maharashtrian",
          type: "Veg",
          health_meter:
            "Corn is one of the most widely consumed cereals grains. It is also a rich source of many vitamins and minerals. Most of the benefits of carrots can be attributed to their beta carotene and fiber content. This root vegetable is also a good source of antioxidant. Spices not only just excite your taste buds but are composed of an impressive list of phytonutrients, essential oils, antioxidants, minerals and vitamins that are essential for overall wellness. Lemon is a good source of vitamin C and is, therefore, a natural antioxidant.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1472886509_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "194",
          title: "Zucchini And Carrot Pancake",
          category: "Breakfast",
          subcategory: "CHILLAS AND PANCAKES",
          cuisine: "Gujarati",
          type: "Veg",
          health_meter:
            "Cereal-pulse (wheat flour + besan) combination improves the quality of protein and makes it an important source of vegetarian protein. Adding vegetables increases the vitamin and mineral content.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1537556162_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "484",
          title: "Egg Oats Paratha (easy To Prepare)",
          category: "Breakfast",
          subcategory: "EGGS",
          cuisine: "North Indian",
          type: "Ovo-Veg",
          health_meter:
            "Egg white in combination with wheat and oats, is one of the best accompaniment to be eaten with a bowl of vegetable. Containing whole wheat flour and oats, this recipe is high in fibre, antioxidants, phytonutrients and also B vitamins. The addition of oats and egg white to the paratha contributes to a healthier option.&nbsp; A high-fibre and protein diet helps you feel full and may contribute to a healthy weight loss if you are dieting. ",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1585671066_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1079",
          title: "Cucumber Carrot Pickle",
          category: "Miscellaneous",
          subcategory: "PICKLES",
          cuisine: "Gujarati",
          type: "Vegan",
          health_meter:
            "Cucumbers are 95 per cent water, keeping the body hydrated while helping the body eliminate toxins. It is a very good source of potassium, an important intracellular electrolyte which is heart friendly and helps to bring a reduction in total blood pressure and heart rates by countering effects of sodium. Carrots are rich in anti-oxidants, vitamins and dietary fiber.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1478266945_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "789",
          title: "Green Moong Dal Chilla(easy To Prepare)",
          category: "Breakfast",
          subcategory: "CHILLAS AND PANCAKES",
          cuisine: "Gujarati",
          type: "Veg",
          health_meter:
            "Green gram dal (moong daal) is rich in Vitamin A, B, C and E and many minerals, such as calcium, iron and potassium. Green gram is rich in protein and fibre.  Along with weight loss, moong dal also improves the metabolism, immune system and protects against fatal diseases.  ",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1681977333_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "987",
          title: "Protein Toast",
          category: "Cereals And Grains",
          subcategory: "SANDWICHES AND ROLLS",
          cuisine: "Other",
          type: "Non Veg",
          health_meter:
            "Eating carbohydrates [bread] shortly after exercising replenishes glycogen, a carbohydrate that is stored in the muscles and used for energy. Honey will add up to the carb. Also, the protein content of egg will facilitate the recovery process by enhancing tissue repair and synthesis.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1663679314_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "622",
          title: "Ragda Chaat",
          category: "Miscellaneous",
          subcategory: "CHAATS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "This ragda chaat consists of all the good benefits of adding them to one's daily diet. Being nutritionally dense and low in calories, not only it is best for weight loss but also the easiest to cook. Being a rich source of protein, antioxidants and vitamins, it is the perfect plant-based food, increasing digestive power. Also, the protein of white peas makes a perfect protein-rich meal for a vegetarian. Also, controls one's appetite, providing complete fullness.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1672063996_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "609",
          title: "Popped Makhana",
          category: "Miscellaneous",
          subcategory: "CHIVDAS AND HEALTHY SNACKS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Makhana is a healthier option to the chips and other fried dishes. Makhana is anti-oxidant. Almonds added to the diet have a favorable effect on blood cholesterol levels.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1663153056_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "477",
          title: "Ragi Roti",
          category: "Cereals And Grains",
          subcategory: "ROTIS AND PARATHAS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Ragi is a rich source of&nbsp; iron, calcium,&nbsp; vitamin B, potassium, zinc, calcium, magnesium, manganese, phosphorus, amino acids like tryptophan helps to reduce appetite, lecithin &amp; methionine helps in decreasing the cholesterol &amp; your body by getting rid of excess fat in liver, antioxidants, gluten-free,&nbsp; insoluble fiber which helps to speed up the intestinal transit time. Being comparatively dry, this roti is recommended for lunch or dinner with dal/pulse/curd &amp; a vegetable.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1574432298_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1040",
          title: "Jain Dum Biryani",
          category: "Cereals And Grains",
          subcategory: "BROWN RICE",
          cuisine: "Gujarati",
          type: "Veg",
          health_meter:
            "Dum biryani is a wholesome meal to have while on weight loss. Brown rice is also a good source of protein, fiber and is rich in essential minerals such as manganese, iron, zinc, phosphorous, calcium, selenium and potassium. Cottage cheese contains all the essential amino acids needed for it to qualify as a complete protein. Spices in it have antibacterial and antiviral properties and many are high in B-vitamins and trace minerals.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1473312584_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "200",
          title: "Whole Wheat Bread Upma (easy To Prepare)",
          category: "Breakfast",
          subcategory: "POHA AND UPMA",
          cuisine: "Maharashtrian",
          type: "Veg",
          health_meter:
            "A healthy plus innovative recipe and not the same bread-butter or cheese-bread which just increases the calories. Bread upma is a very tasty recipe with Indian spices and the health quotient can be improved by added 2 tbsp sprouts or grated tofu.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1436352015_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "204",
          title: "Dry Bhel (easy To Prepare)",
          category: "Miscellaneous",
          subcategory: "CHIVDAS AND HEALTHY SNACKS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "The steam-pressed puffed rice snack is surely the best Indian delicacy. The sweet-tangy snack containing a dash of squeezed lemon juice and raw mangoes, surely adds on to its vitamin C content. Adding puffed rice to your diet may be a health benefit from the nutrients it provides. Although low in fat, puffed rice is high in carbohydrates, and containing proteins from the split moong dal makes it a healthy evening snack.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1662625167_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "320",
          title: "Stir Fry Vegetables",
          category: "Soups And Stir Fries",
          subcategory: "ALL",
          cuisine: "Continental",
          type: "Veg",
          health_meter:
            "Making a stir fry is one of the easiest, cheapest, and quickest ways of creating a great healthy and satisfying meal. By choosing a wide range of veggies, you can not only get a great mix of important micro-nutrients that fill the nutritional gaps in diets, but they also make the dish look vibrant and colorful. Some great vegetables to include in your stir fry are broccoli, red or green capsicum, aubergine,&nbsp;and bok choy. But these are just a few of the many types of vegetables you can throw into your stir fry recipe! And most vegetables have small quantities of healthy fats such as omega, which act on high acidity produced by high protein diets containing tofu and sprouts. Vegetables also give us a big dose of fiber.&nbsp;",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1656580805_medium.jfif",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "859",
          title: "Immunity Booster (easy To Prepare)",
          category: "Supplements",
          subcategory: "ALL",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Apple cider vinegar aids in weight loss, prevents indigestion, and is also helpful in curing a sore throat. Ginger contains a phytochemical- gingerol, which has many powerful medicinal properties. Honey in the drink alleviates allergies.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1481971383_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "814",
          title: "Shukto",
          category: "Sabzi",
          subcategory: "ALL",
          cuisine: "Bengali",
          type: "Veg",
          health_meter:
            "This Bengali dish is made of mixed vegetables. Best low-calorie recipe with a lot of nutritional benefits as it contains vegetables rich in vitamins &amp; minerals. Poppy seed's addition makes this recipe rich not only in taste but also it is a good source of minerals like calcium &amp; zinc.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1451559445_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "830",
          title: "Egg Rice",
          category: "Cereals And Grains",
          subcategory: "BROWN RICE",
          cuisine: "Japanese",
          type: "Non Veg",
          health_meter:
            "This recipe is not only a rich source of protein but also provides all the essential oils and fiber required by our body. It also includes healthy minerals and vitamins from vegetables.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1664954831_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1090",
          title: "One Pan Chicken Couscous",
          category: "Cereals And Grains",
          subcategory: "DALIA OR COUS COUS",
          cuisine: "Other",
          type: "Non Veg",
          health_meter:
            "Including couscous in your diet provides several health benefits. The potassium in couscous provides important functions, such as regulating blood pressure and the heartbeat and helps control fluid balance. Chicken is rich in protein, essential vitamins, and minerals, thereby beneficial in losing weight, cholesterol control, blood pressure control.&nbsp;Chickpeas are high in protein and fiber, both of which are well-known as key elements in weight loss and control. &nbsp;",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1663592564_medium.JPG",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "851",
          title: "Sweet Smoothie",
          category: "Healthy Drinks",
          subcategory: "SMOOTHIES ",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Both avocados and blueberries are rich in antioxidants and are cholesterol-free, and when blended with a frozen banana they make an excellent smoothie. This low sodium smoothie is an excellent source of potassium and vitamin c and vitamin B.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1663156901_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "607",
          title: "Roasted Makhana",
          category: "Miscellaneous",
          subcategory: "CHIVDAS AND HEALTHY SNACKS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Makhana also known as lotus seeds is an Asian water plant which is mainly cultivated for its edible seeds. Makhana is a rich source of calcium, protein, phosphorus, iron, thiamine &amp; zinc. It is a completely nutritious &amp; organic non cereal food. Makhana acts as an antioxidant, easily digestible, strengthen the heart &amp; also very useful in cardiac protection. It helps to provide fullness as well, when combined with bengal gram &amp; some spices &amp; herbs tastes very good as a snack.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1433842922_medium.jpg",
          bookmark_recipe: 0,
          is_video: "1",
        },
        {
          recipe_id: "871",
          title: "Spinach Khar",
          category: "Dals Kadhis And Pulses",
          subcategory: "ALL",
          cuisine: "Assamese",
          type: "Veg",
          health_meter:
            "Spinach leaves are rich in antioxidants and have anti-inflammatory properties which are beneficial against osteoporosis, cardiovascular diseases, diabetes, obesity, etc. Tur dal is a powerhouse of nutrition. They are particularly rich in fiber, protein, and iron. Apart from that, they are also considered to be a good source of potassium, calcium, zinc, niacin, and vitamin K. Garlic helps to boost the immunity system and reduce high cholesterol.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1481969056_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1110",
          title: "Rainbow Chopped Salad",
          category: "Salads And Salad Dressings",
          subcategory: "ALL",
          cuisine: "Italian",
          type: "Vegan",
          health_meter:
            "Healthy, tasty salads brighten up any meal or can be a main course in their own right. This Rainbow chopped salad widens your salad repertoire. A wonderful combination of green red vegetables and oregano leaves mixed with a dash of spices leaves your appetite satisfied. The dressing for this vibrant salad with plenty of orange juice and cider vinegar tossed with olive oil complements the flavors of the salad overall. The inclusion of cider vinegar aids digestion and boosts energy. It also helps in weight loss and lowers glucose levels.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1664031608_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1003",
          title: "Kothimbir Wadi",
          category: "Miscellaneous",
          subcategory: "TIKKIS",
          cuisine: "Maharashtrian",
          type: "Veg",
          health_meter:
            "Coriander has multiple health benefits as it is a wonderful source of dietary fiber. Bengal gram flour is a good protein source and is rich in fibre. Yoghurt being a probiotic is also a great substitute for milk. It improves digestion and boosts immunity. Asafoetida also is known as hing is a good source of fibre and has several anti viral and antibacterial properties. Seeds of the mustard plant are a rich source of minerals such as calcium, magnesium, phosphorous and potassium.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1472885707_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "182",
          title: "Methi Thepla",
          category: "Cereals And Grains",
          subcategory: "ROTIS AND PARATHAS",
          cuisine: "Gujarati",
          type: "Veg",
          health_meter:
            "Theplas are healthy, filling and release energy slowly which is beneficial for health and performing daily tasks. They are also low in calories and saturated fats.  It is an easy and convenient option to carry theplas along with you when you are traveling or are out for a meeting.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1573470839_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1142",
          title: "Apple Peanut Butter Sandwich",
          category: "Desserts",
          subcategory: "ALL",
          cuisine: "Continental",
          type: "Veg",
          health_meter:
            "Apples are extremely rich in important antioxidants, flavonoids, and&nbsp;dietary fiber. Peanut butter has&nbsp;protein&nbsp;as well as&nbsp;potassium which lowers the risk of high blood pressure, stroke and heart disease. Oats are among the healthiest grains on earth. They are a gluten-free whole grain and a great source of important vitamins, minerals, fiber, and antioxidants.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1646648078_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "861",
          title: "Healthy Veggie Sandwich(easy To Prepare)",
          category: "Cereals And Grains",
          subcategory: "SANDWICHES AND ROLLS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Whole wheat bread provides a sufficient amount of fiber helping in various health issues. Paneer is a good source of protein which helps in muscle building and growth and development of tissues. Carrots are rich in Vitamin A and aids in vision. This recipe is easy to make and less time-consuming.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1622021843_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "186",
          title: "Ragi Vegetable Idli",
          category: "Breakfast",
          subcategory: "IDLIS",
          cuisine: "South Indian",
          type: "Veg",
          health_meter:
            "Ragi idli is not just nutritious but also delicious. Ragi idli is the best ragi recipe as it preserves more nutrients because it is steam-cooked. With the traditional rice idli, the presence of ragi adds on to the nutritional quality of the idli. To make this dish healthier, tastier and wholesome, adding vegetables such as green peas, carrot, and French beans makes it yet more perfect. Coriander chutney and sambar are the best side dishes to be had with the whole grain-rich steamed idlis.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1662626760_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "834",
          title: "Maki Sushi Rolls",
          category: "Non-veg",
          subcategory: "FISH",
          cuisine: "Japanese",
          type: "Non Veg",
          health_meter:
            "Sushi is a quick and easy source of protein. If you're looking for a high-protein meal or snack, choose tuna, salmon, which can have 20 or more grams of protein per roll.&nbsp;The omega-3 fatty acids found in fish benefit your cardiovascular health, plus they're natural anti-inflammatory compounds and play a role in brain function. Choose salmon, trout, and tuna if you're looking to get omega-3 fatty acids.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1472817728_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "649",
          title: "Mango Coconut Water",
          category: "Healthy Drinks",
          subcategory: "REFRESHMENT DRINKS ",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Coconut water is a very refreshing drink to beat tropical summer thirst. Its liquid is packed with simple sugars, electrolytes, and minerals to replenish dehydration conditions inside the human body. Mangoes are considered to be an extremely good food choice for dieters because it has high fiber content. The nutrients contained in mango juice include significant sources of vitamin A and vitamin C.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1665059659_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "252",
          title: "Carrot Soup",
          category: "Soups And Stir Fries",
          subcategory: "ALL",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "A flavorsome healthy protein rich soup with fresh and ground coriander leaves. Carrots being loaded with an uncommon amount of beta-carotene this improve the vision and also filled with calcium, potassium, vitamin B and C.&nbsp; Carrots have a fat-fighting feature which is their respectable fiber content, in turn aiding weight loss and helps in lowering cholesterol levels. The addition of coriander leaves helps to replenish lost iron by the body. An overall protein-iron dense soup.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1433312191_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "453",
          title: "Vegetable Paneer Frankie",
          category: "Cereals And Grains",
          subcategory: "FRANKIES AND WRAPS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "A mouthwatering meal, containing colourful ingredients, makes the vegetable paneer Frankie not only a yummy snack but also a complete meal. Made with whole wheat roti, adds on the fiber content of the recipe, giving one a feeling of fullness. Also, the addition of tomatoes, onions and capsicum adds on to its nutritional content and the presence of paneer adds on to the punch of protein.\r\n",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1663858304_medium.JPG",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "616",
          title: "Lemon Popcorn",
          category: "Miscellaneous",
          subcategory: "CHIVDAS AND HEALTHY SNACKS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Popcorn is a natural whole grain, it contains all of the fibre, minerals, B complex vitamins, and vitamin E that is stored in the bran. Lemons are an excellent source of the powerful antioxidant vitamin C which help fight the formation of free radicals known to cause health diseases. Pepper in this recipes provides anti-inflammatory &amp; antibacterial benefits making it a healthy choice of snack.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1571408754_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "636",
          title: "Mix Veg Thalipeeth ",
          category: "Cereals And Grains",
          subcategory: "MILLETS",
          cuisine: "Maharashtrian",
          type: "Veg",
          health_meter:
            "Bajra is high in proteins with a good amount of amino acids. It is a good source of iron and complex B vitamins such as thiamine, niacin and B6. Cabbage is a low calorie, fiber - rich, modified - leafy vegetable containing health - benefiting antioxidants. Combined with whole wheat flour and vegetables, it makes the overall dish rich in dietary fiber, essential for weight loss.&nbsp;",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1574431353_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "512",
          title: "Junglee Chicken Sandwich",
          category: "Cereals And Grains",
          subcategory: "SANDWICHES AND ROLLS",
          cuisine: "Other",
          type: "Non Veg",
          health_meter:
            "A grilled chicken sandwich is a good source of protein, carbohydrate, vitamins, and minerals. It is also healthier than a fried chicken sandwich because grilling uses less oil than deep-frying, meaning fewer calories and fat in the final product. Create an even healthier grilled chicken sandwich by utilizing nutrient-dense ingredients whenever possible and monitoring the use of unhealthy toppings and condiments.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1681978246_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "177",
          title: "Fresh Veggies Egg White Mug",
          category: "Breakfast",
          subcategory: "EGGS",
          cuisine: "North Indian",
          type: "Ovo-Veg",
          health_meter:
            "A very healthy and quick recipe to prepare. It is packed with the goodness of protein from the egg whites and colourful vegetables providing us with different vitamins and minerals. Another plus point is, it is low in fat too which makes it a perfect recipe for people who want to shed some kilos. Also, flax-seeds provide healthy fats and soluble fiber.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1642167120_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "644",
          title: "Fruit Yogurt Parfait",
          category: "Breakfast",
          subcategory: "PORRIDGES-PARFAITS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Apple not only has the luscious taste but is also a rich source of antioxidant nutrients such as beta-carotene, vitamin C and flavonoids. it is also rich in dietary fiber. Together, these nutrients protect the heart, helps to relieve constipation. Crushed walnuts add vitamin E &amp; omega -3 fatty acids. muesli is rich in fiber which helps in constipation. Raisins have a high level of potassium which helps in hypertension. Yogurt is an amazing source of protein and calcium and these ingredients together makes this parfait tasty as well as healthy.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1706785276_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "737",
          title: "Grilled Chicken And Corn On The Cob Salad",
          category: "Salads And Salad Dressings",
          subcategory: "CHICKEN",
          cuisine: "Continental",
          type: "Non Veg",
          health_meter:
            "Chicken is a good source of protein, vitamins, and minerals, while corn contributes to its antioxidant properties making this recipe a healthy salad alternative.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1645706404_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1126",
          title: "Orange Date Muesli With Coconut",
          category: "Desserts",
          subcategory: "",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Greek yogurt is a source of protein and calcium and it thus boosts the immunity and decreases stomach issues. Dates are rich in dietary fiber, iron, and certain vitamins like vitamin C &amp; B complex. Oats, another fiber-rich ingredient adds on to the benefits. High-fiber diets help you feel full. Oranges are a good source of vitamin C and dietary fiber. Almonds and coconut flakes are used for topping which is nutrient dense.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1642084187_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "475",
          title: "Jowar Roti",
          category: "Cereals And Grains",
          subcategory: "ROTIS AND PARATHAS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Jowar is rich in iron, vitamin B &amp; E, potassium, zinc, calcium, magnesium, iron and fibre. Jowar is popular as one of the gluten-free millet among those with gluten sensitivity. The phytochemical levels are so high in this millet that they have shown potential usefulness in reducing obesity as well. Being comparatively dry this roti is recommended for lunch or dinner with dal/pulse/ curd &amp;a vegetable.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1664433959_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1117",
          title: "Carrot Oatmeal (easy To Prepare)",
          category: "Breakfast",
          subcategory: "BREAKFAST BOWLS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "Carrots are a rich source of vitamin A, helps in improving vision, has anti-ageing properties, reduces cholesterol levels, helps in reducing cancer risk. Oats are high in soluble fiber and beta-glucan. Oats makes the perfect, easy to make breakfast recipe. Milk and Greek yoghurt are good sources of protein and calcium thus strengthen the bones. Inclusion of almonds and raisins thus increases the fiber content of the recipe.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1571755593_medium.png",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "210",
          title: "Healthy Cereal Chivda (easy To Prepare)",
          category: "Miscellaneous",
          subcategory: "CHIVDAS AND HEALTHY SNACKS",
          cuisine: "Other",
          type: "Veg",
          health_meter:
            "An amazing healthy snack, chivda is usually fried and many people don't eat them even if it's their favourite. But here is the recipe for roasted chivda, which is healthy as well as tasty. Puffed rice and Bengal gram is a cereal-pulse combination which improves the quality of protein and makes it a very beneficial source of protein for all vegetarians.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1655448311_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "466",
          title: "Spicy Cajun Chicken Quinoa",
          category: "Cereals And Grains",
          subcategory: "QUINOA AND BARLEY",
          cuisine: "Continental",
          type: "Non Veg",
          health_meter:
            "Spicy Cajun chicken quinoa makes a yummy meal with a double boost of protein coming from chicken and quinoa. Low in calories, high in fiber, minerals, and vitamins such as B vitamins, and prepared in a healthy cooking method such as baking, served on a bed of steamed leafy greens, Cajun chicken quinoa makes a perfect dish.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1663858237_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1181",
          title: "Soya Dosa",
          category: "Breakfast",
          subcategory: "DOSAS AND UTTAPAMS",
          cuisine: "South Indian",
          type: "Veg",
          health_meter:
            "Soy flour is a gluten-free and good source of protein. Urad dal is also a good source of protein. It is a healthy dosa.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1664274979_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "963",
          title: "Dalia Dhokla",
          category: "Cereals And Grains",
          subcategory: "DALIA OR COUS COUS",
          cuisine: "Gujarati",
          type: "Veg",
          health_meter:
            "Oats are rich in a specific type of fiber called beta-glucan. This particular type of fiber is known to help lower levels of bad cholesterol. Oats, via their high fiber content, helps you to be fuller and aids in weight management. Broken wheat or dalia benefits to keep your digestive tract healthy. Yogurt provides a dose of animal protein, plus several other nutrients found in dairy foods, like calcium, vitamin B-2, vitamin B-12, potassium, and magnesium. Urad dal is also good for women as it has iron, folic acid, calcium, magnesium, potassium which makes it a healthy pulse\r\n\r\n  ",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1588343389_medium.jpeg",
          bookmark_recipe: 0,
          is_video: "0",
        },
        {
          recipe_id: "1114",
          title: "Egg White Frittata",
          category: "Breakfast",
          subcategory: "EGGS",
          cuisine: "Italian",
          type: "Ovo-Veg",
          health_meter:
            "This recipe contains Sweet potatoes which are high in Vitamin A and beta carotene as well as potassium; sweet potatoes also contain a good amount of Vitamin E, calcium and folate. Adding vegetables like carrot and peas increase vitamin and mineral content. Egg white and feta cheese are good sources of protein and calcium respectively and it makes the frittata more palatable. Fresh basil leaves in the recipe thus enhance the flavour of the frittata.",
          recipe_image:
            "https://www.balancenutrition.in/images/receipe-img/1634198344_medium.jpg",
          bookmark_recipe: 0,
          is_video: "0",
        },
      ],
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in recipeBookChapters:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const getRecipeDetails = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Recipe details.",
      recipe_bookmarked: 0,
      data: {
        id: "401",
        created: "2022-09-23 18:42:00",
        flag: "1",
        title: "Vegetable Raita",
        category: "Milk And Milk Products",
        subcategory: "CURDS KADHI RAITAS",
        cuisine: "North Indian",
        category_id: "23",
        subcat_id: "63",
        cuisine_id: "1",
        energy_kcal: "150",
        protein_gram: "4.3",
        fat_gram: "4",
        carbohyd_gram: "13",
        fiber_gram: "0",
        calories: "0",
        ingredients:
          '<p></p><ul><li><span style="line-height: 1.42857;">Curd - 1 Katori</span><br></li><li><span style="line-height: 1.42857;">Chopped vegetables&nbsp; - 1 cup (&nbsp;</span><span style="line-height: 1.42857;">Cucumber, beetroot, onion, and tomato)</span></li><li><span style="line-height: 1.42857;">Mint leaves, finely chopped&nbsp; - 1 tbsp</span><br></li><li><span style="line-height: 1.42857;">Roasted ground cumin&nbsp; - ½ tsp</span><br></li><li><span style="line-height: 1.42857;">Salt -&nbsp; ½ tsp</span><br></li><li><span style="line-height: 1.42857;">Green chilly, finely chopped -&nbsp; ½ (optional)</span><br></li><li><span style="line-height: 1.42857;">Black pepper -&nbsp; ¼ tsp</span><br></li><li><span style="line-height: 1.42857;">Red chilies powder&nbsp; - ¼ tsp</span><br></li><li><span style="line-height: 1.42857;">Chat masala - ¼ tsp (optional)</span><br></li><li><span style="line-height: 1.42857;">Fresh coriander leaves  to granish</span><br></li><li><span style="line-height: 1.42857;">Water - 1 cup</span><br></li></ul><p></p>',
        method:
          '<p></p><ul><li><span style="line-height: 1.42857;">Peel the cucumber and chop it into small pieces (cubes).&nbsp;</span><br></li><li><span style="line-height: 1.42857;">Take a medium sized bowl and add curd to it. Mash it with a blender until it gets smooth. Add water and remaining ingredients except for cucumber, beetroot, onion, tomato and again mix them well.&nbsp;</span><br></li><li><span style="line-height: 1.42857;">Now add cucumber, beetroot, onion, tomato to it and mix it again. &nbsp;</span><br></li><li><span style="line-height: 1.42857;">Refrigerate vegetable raita for 1/2 hour before serving, garnish vegetable raita with finely chopped coriander leaves and serve chilled.</span><br></li></ul><p></p>',
        nutritive:
          "&lt;table class=&quot;mce-item-table&quot; style=&quot;height: 78px;&quot; data-mce-selected=&quot;1&quot; data-mce-style=&quot;height: 78px;&quot; width=&quot;526&quot;&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;Energy (Kcals)&lt;br&gt;&lt;/td&gt;&lt;td&gt;125&lt;br&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Protein(g)&lt;br&gt;&lt;/td&gt;&lt;td&gt;3.6&lt;br&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Fats (g)&lt;br&gt;&lt;/td&gt;&lt;td&gt;4&lt;br&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;Carbohydrates (g)&lt;br&gt;&lt;/td&gt;&lt;td&gt;8&lt;br&gt;&lt;br&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;",
        meter:
          "<font face='Roboto-Regular' size='5'><div style=\"text-align: justify;\">The healthy combination of curd plus vegetables is what makes vegetable raita the best accompaniment to be had with roti or rice preparation. Having healthy vegetable raita will not only help improve digestion but also boost one's immunity. Also, containing vegetables such as carrots, onions, and beetroot makes this an anti-oxidant rich dish with high fiber and naturally low in calories.</div></font>",
        recipe_image:
          "https://www.balancenutrition.in/images/receipe-img/1663938720_large.jpeg",
        type: "Veg",
        seokeywords: "",
        seodescription:
          "The healthy combination of curd plus vegetables is what makes vegetable raita the best accompaniment to be had with roti or rice preparation. Having healthy vegetable raita will not only help improve digestion but also boost one's immunity. Also, containing vegetables such as carrots, onions, and beetroot makes this an anti-oxidant rich dish with high fiber and naturally low in calories.",
        seotitle: "Vegetable Raita | Balance Nutrition",
        created_by: "Abdul",
        recipe_by: "KHYATI RUPANI",
        is_video: "0",
        video_url: "",
        is_deleted: "0",
        deleted_by: "0",
        deleted_datetime: "0000-00-00 00:00:00",
        view_count: "14656",
        updated_date: "2024-06-06 09:27:53",
        app_ingredients: "null",
        ingredients_array: [
          "Curd - 1 Katori",
          "Chopped vegetables - 1 cup (Cucumber, beetroot, onion, and tomato)",
          "Mint leaves, finely chopped - 1 tbsp",
          "Roasted ground cumin - ½ tsp",
          "Salt - ½ tsp",
          "Green chilly, finely chopped - ½ (optional)",
          "Black pepper - ¼ tsp",
          "Red chilies powder - ¼ tsp",
          "Chat masala - ¼ tsp (optional)",
          "Fresh coriander leaves  to granish",
          "Water - 1 cup",
        ],
        method_array: [
          "Peel the cucumber and chop it into small pieces (cubes).",
          "Take a medium sized bowl and add curd to it. Mash it with a blender until it gets smooth. Add water and remaining ingredients except for cucumber, beetroot, onion, tomato and again mix them well.",
          "Now add cucumber, beetroot, onion, tomato to it and mix it again. ",
          "Refrigerate vegetable raita for 1/2 hour before serving, garnish vegetable raita with finely chopped coriander leaves and serve chilled.",
        ],
        old_method:
          '<p></p><ul><li><span style="line-height: 1.42857;">Peel the cucumber and chop it into small pieces (cubes).&nbsp;</span><br></li><li><span style="line-height: 1.42857;">Take a medium sized bowl and add curd to it. Mash it with a blender until it gets smooth. Add water and remaining ingredients except for cucumber, beetroot, onion, tomato and again mix them well.&nbsp;</span><br></li><li><span style="line-height: 1.42857;">Now add cucumber, beetroot, onion, tomato to it and mix it again. &nbsp;</span><br></li><li><span style="line-height: 1.42857;">Refrigerate vegetable raita for 1/2 hour before serving, garnish vegetable raita with finely chopped coriander leaves and serve chilled.</span><br></li></ul><p></p>',
        recipe_bookmarked: 0,
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in recipeDetails:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const deleteChapter = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Chapter Deleted Successfully.",
      data: [],
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in deleteChapter:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};
