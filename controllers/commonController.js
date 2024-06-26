export const getRedirectAppScreen = async (req, res) => {
  try {
    const response_data = {
      status: true,
      message: "Redirect to screen",
      redirect_screen: "my-profile",
      android_version: "151",
      ios_version: "1.0.92",
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in getRedirectAppScreen:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};
