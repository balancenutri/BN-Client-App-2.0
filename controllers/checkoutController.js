export const programCheckout = async (req, res) => {
  try {
    const response_data = {
      status: true,
      data: {
        countryId: "101",
        country: "India",
        currency: "INR",
        mobileNumber: null,
        program_name: "Reform Intermittent Client Exclusive",
        program_logo:
          "https://www.balancenutrition.in/images/programs/checkout/bt.png",
        program_validity: "90",
        extra_validity: "25",
        wallet_apply_top_section: {
          wallet_amount: "",
          is_show: false,
          auto_apply: false,
        },
        coupon_apply_top_section: {
          coupon_code: "BALTEST0909",
          is_show: false,
          auto_apply: false,
          coupon_amount: 0,
        },
        payment_details: [
          {
            title: "<font><b>Program Cost:</b></font>",
            currency: "₹",
            amount: "<b>27999</b>",
          },
          {
            title: "<font>Existing Discount <b>(0%):</b></font>",
            currency: "₹",
            amount: "-0",
          },
        ],
        total_savings: {
          currency: "₹",
          amount: 0,
          percentage: "(0%)",
        },
        grand_total: {
          currency: "₹",
          amount: 27999,
          actual_amount: "27999",
        },
        wallet_bonus: {
          currency: "₹",
          amount: "500",
        },
        show_coupon_code_line: 0,
        help_section_array: [
          {
            help_title: "Payment Related Queries:",
            help_number: "9820798255",
            help_icon:
              "https://www.balancenutrition.in/bn-api-new/images/ekit/dashboard-ekit/call_icon.png",
            help_action: "call",
          },
          {
            help_title: "Program Related Queries:",
            help_number: "9820455544",
            help_icon:
              "https://www.balancenutrition.in/bn-api-new/images/ekit/dashboard-ekit/call_icon.png",
            help_action: "call",
          },
          {
            help_title: "Whatsapp us:",
            help_number: "9820455544",
            help_icon:
              "https://www.balancenutrition.in/bn-api-new/images/ekit/dashboard-ekit/whatsapp_icon.png",
            help_action: "whatsapp",
          },
        ],
        help_section_title: "Need Help? We’re here for you",
        back_button_pop_up: {
          checkout_pop_up_title: "Still Unsure?",
          checkout_pop_up_desc:
            "Use code BALOF10 at checkout & get flat 10% additional off",
          checkout_pop_up_btn1: "Use Code",
          checkout_pop_up_btn2: "Not Now",
          show_popup: false,
        },
        available_coupon_codes: [],
        show_invalid_coupon: false,
        invalid_coupon_title: "Oops!",
        invalid_coupon_description:
          "Seems like you have entered an <b>invalid code.</b> Connect with your mentor now!",
        invalid_coupon_button1: "Mentor Chat",
        invalid_coupon_button2: "WhatsApp Us",
        invalid_coupon_call: "8928001617",
        client_email: null,
      },
    };

    return res.status(200).json(response_data);
  } catch (error) {
    console.error("Error in programCheckout:", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

