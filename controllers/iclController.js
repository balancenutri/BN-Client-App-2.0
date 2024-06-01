export const iclCategory = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Ingredient Categories",
      last_visited_screen: "ingredient-checklist-details/1",
      skip_button: "0",
      next_button: "1",
      data: [
        {
          category_id: "1",
          category_name: "Natural Spices",
          status: "2",
        },
        {
          category_id: "2",
          category_name: "Snacks",
          status: "1",
        },
        {
          category_id: "3",
          category_name: "Cereals",
          status: "2",
        },
        {
          category_id: "4",
          category_name: "Grocery",
          status: "2",
        },
        {
          category_id: "5",
          category_name: "Note To Mentor",
          status: "2",
        },
      ],
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in programDetails:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

export const iclList = async (req, res) => {
  try {
    const response_data = {
      "status": true,
      "message": "Ingredient List",
      "data": [
          {
              "ingredient_id": "1",
              "ingredient_name": "Cinnamon Powder",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can't Buy",
              "id": "1041305"
          },
          {
              "ingredient_id": "19",
              "ingredient_name": "Wheat Grass Powder",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can Buy",
              "id": "1041321"
          },
          {
              "ingredient_id": "65",
              "ingredient_name": "Nutmeg Powder",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can Buy",
              "id": "1041329"
          },
          {
              "ingredient_id": "66",
              "ingredient_name": "Ashwagandha  Powder / Roots",
              "category_id": "1",
              "quantity": "100 g",
              "availability": "Can't Buy",
              "id": "1041330"
          },
          {
              "ingredient_id": "2",
              "ingredient_name": "Triphala Powder / Tablets",
              "category_id": "1",
              "quantity": "1 bottle",
              "availability": "Can Buy",
              "id": "1041306"
          },
          {
              "ingredient_id": "18",
              "ingredient_name": "Kayam Churna  Powder / Tablet",
              "category_id": "1",
              "quantity": "1 bottle",
              "availability": "Can't Buy",
              "id": "1041320"
          },
          {
              "ingredient_id": "3",
              "ingredient_name": "Fennel Seeds [Saunf]",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can Buy",
              "id": "1041307"
          },
          {
              "ingredient_id": "6",
              "ingredient_name": "Methi Seeds [Fenugreek Seeds]",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can Buy",
              "id": "1041309"
          },
          {
              "ingredient_id": "8",
              "ingredient_name": "Chia Seeds",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can Buy",
              "id": "1041311"
          },
          {
              "ingredient_id": "11",
              "ingredient_name": "Peppercorns",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can't Buy",
              "id": "1041314"
          },
          {
              "ingredient_id": "10",
              "ingredient_name": "Jeera [Cumin Seeds]",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can Buy",
              "id": "1041313"
          },
          {
              "ingredient_id": "71",
              "ingredient_name": "Coriander Seed",
              "category_id": "1",
              "quantity": "50 g",
              "availability": "Can't Buy",
              "id": "1041335"
          },
          {
              "ingredient_id": "30",
              "ingredient_name": "Sunflower Seeds [Unsalted]",
              "category_id": "1",
              "quantity": "1 packet",
              "availability": "Can Buy",
              "id": "1041326"
          },
          {
              "ingredient_id": "31",
              "ingredient_name": "Pumpkin Seeds [Unsalted]",
              "category_id": "1",
              "quantity": "1 packet",
              "availability": "Can't Buy",
              "id": "1041327"
          },
          {
              "ingredient_id": "15",
              "ingredient_name": "Chamomile Tea",
              "category_id": "1",
              "quantity": "10 tea bags",
              "availability": "Can Buy",
              "id": "1041318"
          },
          {
              "ingredient_id": "16",
              "ingredient_name": "Moringa Tea",
              "category_id": "1",
              "quantity": "10 tea bags",
              "availability": "Can't Buy",
              "id": "1041319"
          },
          {
              "ingredient_id": "68",
              "ingredient_name": "Peppermint Tea",
              "category_id": "1",
              "quantity": "10 tea bags",
              "availability": "Can Buy",
              "id": "1041332"
          },
          {
              "ingredient_id": "69",
              "ingredient_name": "Earl Grey Tea",
              "category_id": "1",
              "quantity": "10 tea bags",
              "availability": "Can't Buy",
              "id": "1041333"
          },
          {
              "ingredient_id": "70",
              "ingredient_name": "Spearmint Tea",
              "category_id": "1",
              "quantity": "10 tea bags",
              "availability": "Can Buy",
              "id": "1041334"
          },
          {
              "ingredient_id": "72",
              "ingredient_name": "Amla Juice",
              "category_id": "1",
              "quantity": "1 bottle",
              "availability": "Can't Buy",
              "id": "1041336"
          },
          {
              "ingredient_id": "73",
              "ingredient_name": "Aloe Vera Juice [Unsweetened]",
              "category_id": "1",
              "quantity": "1 bottle",
              "availability": "Can Buy",
              "id": "1041337"
          },
          {
              "ingredient_id": "9",
              "ingredient_name": "Apple Cider Vinegar",
              "category_id": "1",
              "quantity": "1 Bottle",
              "availability": "Can't Buy",
              "id": "1041312"
          },
          {
              "ingredient_id": "85",
              "ingredient_name": "Balsamic Vinegar",
              "category_id": "1",
              "quantity": "250 ml",
              "availability": "Can Buy",
              "id": "1041340"
          },
          {
              "ingredient_id": "22",
              "ingredient_name": "Cold Pressed Flaxseed Oil",
              "category_id": "1",
              "quantity": "1 Bottle",
              "availability": "Can't Buy",
              "id": "1041324"
          },
          {
              "ingredient_id": "23",
              "ingredient_name": "Cold Pressed Coconut Oil",
              "category_id": "1",
              "quantity": "1 Bottle",
              "availability": "Can Buy",
              "id": "1041325"
          },
          {
              "ingredient_id": "90",
              "ingredient_name": "Isabgol [Psyllium Husk]",
              "category_id": "1",
              "quantity": "100 g",
              "availability": "Can Buy",
              "id": "1041343"
          },
          {
              "ingredient_id": "74",
              "ingredient_name": "Yakult / Yakult Light / Aktifit",
              "category_id": "1",
              "quantity": "A pack of 6 bottles",
              "availability": "Can't Buy",
              "id": "1041338"
          },
          {
              "ingredient_id": "87",
              "ingredient_name": "Chyawanprash [Sugar Free]",
              "category_id": "1",
              "quantity": "250 g",
              "availability": "Can't Buy",
              "id": "1041342"
          }
      ]
  };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in programDetails:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};


export const noteToMentor = async (req, res) => {
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
