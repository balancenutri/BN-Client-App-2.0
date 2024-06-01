export const iclList = async (req, res) => {
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

export const naturalSpices = async (req, res) => {
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

export const snacks = async (req, res) => {
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

export const cereals = async (req, res) => {
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

export const glossary = async (req, res) => {
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
