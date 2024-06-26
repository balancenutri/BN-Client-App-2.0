// import { mysqlConnection } from "../db.js";

import { secret, tokenExpiration } from "../config/config.js";
import jwt from "jsonwebtoken"; // Correct import for ES module syntax
import md5 from "md5";
import { mysqlConnection } from "../db.js";
import twilio from "twilio";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
}

export const forceAppUpdate = async (req, res) => {
  let responseData;
  responseData = {
    status: true,
    message: "Latest App Version",
    data: {
      user_type: "Lead",
      android_version: "136",
      ios_version: "1.0.83",
      contact1: "09820543329",
      contact2: "09867940635",
      isRenewal: false,
      isRenwalIMF: false,
      program_name: null,
      disable_lead_flow: false,
      counselor_whatsapp_no: "9820792855",
      weight_loss_type: "0",
    },
  };
  return res.status(200).json(responseData);
};

export const forgotPassword = async (req, res) => {
  let responseData;
  responseData = {
    status: true,
    message: "OTP send successfully, Please check your email",
    data: {
      first_name: "app",
      last_name: "team",
      email: "admin@gmail.com",
      otp: "1111",
    },
  };

  return res.status(200).json(responseData);
};


export const emailLogin = async (req, res) => {

  const { email, password } = req.body;

  try {
    mysqlConnection.query(
      "SELECT user_id, first_name, last_name, enc_password, user_type, current_screen FROM users WHERE email_id = ?",
      [email],
      async (error, results) => {
        if (error) {
          return res.status(500).json({ message: "Database error", error });
        }

        if (results.length === 0) {
          return res
            .status(400)
            .json({ message: "Invalid email or password" });
        }

        const user = results[0];
        console.log(user);

        const hashedPassword = md5(password);
        if (hashedPassword !== user.enc_password) {
          return res.status(401).json({ error: "Authentication failed" });
        }

        const token = jwt.sign({ id: user.user_id }, secret, {
          expiresIn: tokenExpiration,
        });
        console.log("Generated token:", token); 

        const responseData = {
          status: true,
          message: "User logged in successfully!",
          data: {
            id: user.user_id.toString(),
            first_name: user.first_name,
            last_name: user.last_name,
            email_id: email,
            user_type: user.user_type,
            hs_taken: true,
            profile_img: "I",
            last_visited_screen: user.current_screen,
            chat_url:
              "https://www.balancenutrition.in/mentor-chat-for-app/Mjg4NTA=/401eb87494c058299c9f7c6af03fabea",
            token: token, 
          },
        };

        return res.status(200).json(responseData);
      }
    );
  } catch (err) {
    console.error("Login error:", err.message); // Debug: Print error details
    res.status(500).json({ message: "Server error" });
  }
};


const sendOtp = (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  const { phoneNumber, country } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ message: "Phone number is required" });
  }

  const phoneNumberParsed = parsePhoneNumberFromString(phoneNumber, country);
  if (!phoneNumberParsed || !phoneNumberParsed.isValid()) {
    return res.status(400).json({ message: "Invalid phone number format" });
  }

  const formattedPhoneNumber = phoneNumberParsed.format("E.164");

  mysqlConnection.query(
    "SELECT user_id FROM users WHERE phone_number = ?",
    [formattedPhoneNumber],
    (err, results) => {
      if (err) {
        console.error("Database query error:", err);
        return res
          .status(500)
          .json({ message: "Internal server error", error: err });
      }

      if (results.length === 0) {
        return res.status(400).json({ message: "Invalid phone number" });
      }

      const userId = results[0].user_id;
      console.log("User ID:", userId);

      const otp = generateOTP();

      mysqlConnection.query(
        "UPDATE users SET otp = ? WHERE user_id = ?",
        [otp, userId],
        (err, updateResults) => {
          if (err) {
            console.error("Database update error:", err);
            return res
              .status(500)
              .json({ message: "Internal server error", error: err });
          }

          client.messages
            .create({
              body: `Your OTP code is ${otp}`,
              from: process.env.TWILIO_PHONE_NUMBER,
              to: formattedPhoneNumber,
            })
            .then((message) => {
              res
                .status(200)
                .send({
                  success: true,
                  message: `OTP sent to ${formattedPhoneNumber}`,
                });
            })
            .catch((error) => {
              console.error("Error sending OTP:", error);
              res.status(500).json({ message: "Internal server error", error });
            });
        }
      );
    }
  );
};


export const verifyOtp = async (req, res) => {
  let responseData;
  // console.log(req.body.email);
  let user_otp_data = {
    email: "user@gmail.com",
    otp: 1111,
  };

  responseData = {
    status: true,
    message: "OTP verified successfully",
    data: user_otp_data,
  };

  return res.status(200).json(responseData);
};

export const setPassword = async (req, res) => {
  let responseData;
  // console.log(req.body.email);

  responseData = {
    status: true,
    message: "Your password has been changed successfully",
  };

  return res.status(200).json(responseData);
};

export const termsAndConditions = async (req, res) => {
  let responseData;
  responseData = {
    status: true,
    message: "terms & privacy policy",
    data: {
      title: "<b>Terms and Condition</b>",
      text: "Our Policies are compliant with the European Union’s General Data Protection Regulation. As per the policies of the General Data Protection Regulation you as a user have more control over your own data, hereby making your experience safe and secure.<br />\n<br />\nTERMS OF USE & PRIVACY POLICIES<br />\nThis user agreement (“Agreement”) is an agreement between you and M/s Balance Nutrition (“Balance Nutrition” or “we” or “us” as the context requires) governing your use of Balance Nutrition’s Mobile Application (“Application”), website : www.balancenutrition.in and/or any of its services. By accessing the Mobile Application and the website www.balancenutrition.in at your sole discretion, registering and using our services as a guest/visitor or as a registered member, you agree that you are bound by this Agreement and all the terms mentioned herein. This user Agreement governs your access to the Mobile Application, website any any/all of the services offered by M/s Balance Nutrition and shall apply to all the users, visitors and the ones who access the use of this Mobile Application and website www.balancenutrition.in and any of our services. If you do not agree with the terms and conditions mentioned in this Agreement then you as a user should stop using our Mobile Application and the website www.balancenutrition.in and all/any of our services immediately and if you still continue using this Application and the website then Balance Nutrition shall not be liable for any consequences, loss, damage and liability arising from this unauthorised use. By entering into this Agreement you affirm that your are not a minor and are fully able to and competent as per law to enter into this Agreement and to abide by all its terms and conditions, obligations and to further comply with this Agreement. You further agree that you as a person are not barred by law to enter into a binding agreement and that you agree to use the mobile application of M/s Balance Nutrition and the website www.balancenutrition.in in compliance with local, national and international laws and regulations. We reserve a right to revise these terms of use and Privacy Policies at any given point of time by amending this page and providing information about the updated policies. These terms of use shall be posted on the Mobile Application and the website and you as a user are expected to check this page from time to time and take note of the changes we make, as they are binding on you as a user. All the changes in the terms of use are effective as soon as they are published on the Mobile Application and the website www.balancenutrition.in and you agree to be bound by the revised terms and conditions of use and all the privacy policies.<br />\n<br />\nTERMS AND CONDITIONS<br />\nBy subscribing to our services you accept and agree to these terms and conditions (“Terms”). It is therefore important that you read through all the terms and conditions carefully. You should not register with us or any of our services if you do not consent to these terms and conditions.<br />\n<br />\nUSE OF OUR SERVICES<br />\nBalance Nutrition is a service developed and provided by M/s Balance Nutrition. Services provided by M/s Balance Nutrition are available online through our website www.balancenutrition.in and on Google Play store as “Balance Nutrition”. The purpose of Balance Nutrition is to provide you with nutritional and health information. These services are available for your personal use and consumption only and is not meant for commercial use. By agreeing to the use of services of M/s Balance Nutrition and agreeing to its terms mentioned you agree that:-<br />\n<br />\nYou shall provide your accurate personal data.<br />\nYour membership/ subscription with M/s Balance Nutrition is of a personal nature and shall not be transferred to anybody else.<br />\nBalance Nutrition shall be authorised to remove user material from the service and/or user account if it is found to be inappropriate.<br />\nYou shall be responsible for storing your login credentials safely so as to prevent misuse of your account.<br />\nM/s Balance Nutrition shall in no way be responsible for loss or damage caused by unauthorised access or login of your account.You shall inform M/s Balance Nutrition immediately if you suspect unauthorised access or login of your account.<br />\nYou are not under the age of 13. M/s Balance Nutrition’s services are not meant for anybody who is below the age of 13.<br />\nYou shall not engage in any illegal or unlawful activities on the Application or the website www.balancenutrition.in, such as posting or contributing to any information that may contain or involve incitement, pornography, defamation, child pornography, racial hatred etc.<br />\nYou shall not contribute to any religious or political views or any form of propaganda.<br />\nYou shall not share any other person’s personal information.<br />\nViolation of any of the terms of M/s Balance Nutrition shall lead to termination of your user account and services.<br />\n<br />\nINFORMATION ABOUT PERSONAL DATA WE COLLECT<br />\nThis policy tells you about how we at M/s Balance Nutrition use the personal information collected on our mobile Application and our website www.balancenutrition.in . When you register with our services or signup on our Mobile Application and/or our website www.balancenutrition.in we collect your personal data (general information) at the time of registration like your first name, last name, mobile number, email address, postal address, country of residence, geo-location, IP address, height, weight, date of birth (dd/mm/yyyy), gender, body type, medical condition, menstruation (whether on time or not) health issues, body measurement, sleeping pattern, smoking habits (if any)alcohol consumption pattern (if any), daily activity levels water intake, fruits and vegetables intake, eating habits etc. On the basis of the information provided by you M/s Balance Nutrition provides you, the user with his/her Body Mass Index, health score and weight report in addition to providing you with what your ideal weight should be. You (the user) can choose whether to provide us with information or not but you may not be able to register yourself on the mobile Application or take advantage of all the features unless certain information is provided by you. The information you provide to M/s Balance Nutrition is used to fulfil your specific requests. By agreeing to our terms and conditions you also consent the use of information provided by you to send you e-mails/news letters, health tips and text messages to provide you with informative services, latest offers, policy changes etc. For users of our subscription services the information is also used to remind you (the users) about membership renewal and/or to confirm your orders and to send you recipes, health tips , new updates etc. To know more about Balance Nutrition’s data protection practices, please read our privacy policy mentioned below. This policy explains to you as to how your personal information is treated by M/s Balance Nutrition and how M/s Balance Nutrition protects your privacy when you use its Services.<br />\n<br />\nCOOKIES (meant only for use of the website www.balancenutrition.in)<br />\nOur website www.balancenutrition.in may use cookies and tracking technology depending on the features offered. Cookies and tracking technology are useful for gathering information such as browser type and operating system, tracking the number of visitors to our website, and understanding how visitors use our website. Cookies can also help customize the website for visitors. Personal information cannot be collected via cookies and other tracking technology, however, if you previously provided personally identifiable information, cookies may be tied to such information. You may choose to block and prevent use of cookies through your browser and mobile phone device but that may prevent you from taking advantage of our Mobile Application’s most features. We may use the information shared by you on the website to only understand as to how people use our website, what features do your users like and to further provide you best online experience.<br />\n<br />\nUSE OF SUBSCRIBED SERVICES<br />\nCertain portions, components, contents and features of our Mobile Application and our Website www.balancenutrition.in are available only to such individuals who purchase our services as available on our mobile Application or our Website www.balancenutrition.in. These services are referred to as Subscribed Services in this Agreement. As a subscriber to the Subscribed Services, you agree:<br />\n<br />\nTo pay for in a timely manner any fixed and periodic charges and fees required for the Subscribed Services along with any Applicable government taxes. Unless payments as required are received by M/s BALANCE NUTRITION, the Subscribed Services shall not be available to you. M/s BALANCE NUTRITION shall not be responsible for any non-receipt of fees on account of any faults in the payment gateway or internet connection or postal delays. The subscribed services are not transferable and fees are non refundable. Every service subscribed must be consumed within the set days provisioned and mentioned clearly on the program page. The validity period for a 30 days program is 45 days, the validity period for a 60 days program is 80 days, the validity period for a 90 days program is 115 days and the validity period for a 120 days program is 150 days and no further extensions shall be granted beyond the program validity under any circumstance/s. The diet plans given to the user by M/s Balance Nutrition shall be available/ visible in the Accounts section until the validity period of the program. The user has the option to save or print the same until the validity of the program. M/s Balance Nutrition shall not be responsible if the user is unable to print the diet plan subscribed  for whatsoever reason/s during the validity of the program and shall further not be entitled to ask for a copy after the validity of the program. M/s Balance Nutrition reserves the right to increase charges and fees, or to institute new charges or fees at any time, communicated through a posting on the Website and/or Mobile Application or such other means as we may deem appropriate from time to time (including electronic mail or conventional mail). The revised/enhanced fees shall be paid within 21 days of the date of the above communication failing which the program shall stand terminated without prior intimation.<br />\nTo pay the fees for the Subscribed Services along with any applicable government taxes in advance. The fees are non-refundable under any circumstances regardless of whether you (the user) have utilized the subscribed services.<br />\nFor any reward schemes announced validity dates of the program will be strictly enforced and no extension will be considered. Final discretion of deciding on any kind of reward announced in any offer will be with M/s Balance Nutrition.<br />\nFor any kind of reward on referrals points or of any other kind final authentication for eligibility will have to be done by M/s Balance Nutrition and M/s Balance Nutrition will have sole discretion on the matter.<br />\nTo be responsible for all charges and fees associated with connecting to the Website and/or mobile Application and the Subscribed Services, including without limitation all your telephone access lines, internet service provider fees, telephone and computer equipment, sales taxes and any other fees and charges necessary to access Subscribed Services.<br />\nTo provide us with true, accurate and complete information as required during the sign up process (“Subscription Data”) for purposes of your use of the Subscribed Services (data as mentioned above). You shall accurately maintain and update the Subscription Data. Notwithstanding any other provision of this Agreement, if you provide any information that is untrue, inaccurate, or incomplete, or we have reasonable grounds to suspect that such is the case, we reserve the right to suspend or terminate your user account or subscription and refuse any or all current or future use by you of our Website www.balancenutrition.in and our mobile application(or any portion thereof) or any of Subscribed Services. You are obligated to check the “My Account” feature of our Website and mobile Application to determine whether your Subscription Data is accurate, and, if not, to correct or update your Subscription Data including your billing information. You agree not to register or subscribe for more than one account, create an account on behalf of someone else, or create a false or misleading identity on the Website www.balancenutrition.in or on the mobile Application.<br />\nThat the availability and use of our Subscribed Services may be limited based on demographic, geographic, health or other criteria as we may establish or change at our discretion. You understand and agree that we may disallow you from subscribing to the Subscribed Services or may terminate your subscription to the Subscribed Services at any time based on the criteria mentioned above.<br />\nOn revocation or termination of your registration, not to register or subscribe again with our Website www.balancenutrition.in or our Application or by using another user name or through any other means. If M/s Balance Nutrition has reason to suspect, in its sole discretion, that your account has previously been terminated, M/s Balance Nutrition reserves the right to terminate any new accounts you have registered without any notice, or to exercise any other remedies available to us under this Subscription Agreement or by law.<br />\nTo be fully responsible for maintaining the confidentiality of your password and user account information. You must notify M/s Balance Nutrition immediately in the event of any known or suspected unauthorized use of your user account, or any known or suspected breach of security, including loss, theft, or unauthorized disclosure of password. In the event of a breach of security, you will remain liable for any unauthorized use of your subscription until you update your Subscription Data. You shall be entirely responsible for any and all activities which occur under your user account. You shall remain responsible for paying any amounts billed to your credit card by a third party which were not authorized by you.<br />\nNot to post on the service any material protected by copyright, trademark, or other proprietary right (which you as a user are not the owner of) without the express permission of the owner of the copyright, trademark or other proprietary right. You agree that the posting of any material by you shall imply that the copyright, trademark or other proprietary right in that material rests with you. You agree and acknowledge that you shall be solely liable for any action/s or damages resulting from any infringement of copyrights, trademarks, or proprietary rights, or any other harm resulting from any posting made by you.<br />\n<br />\nBN-WALLET SECTION<br />\nBN-WALLET SECTION is designed for the loyal clients of M/s Balance Nutrition which is available on the website www.balancenutrition.in and the Mobile Application on successful registration. Registered users of subscribed services can earn reward points/loyalty points from existing subscriptions, targeted weight loss and frequent service purchases which shall be credited to a user’s BN-WALLET SECTION in the account on the mobile application and the website www.balancenutrition.in. The reward points/loyalty points so collected can be used to avail discounts on new plans/subscriptions. Please note that reward points/loyalty points are non-transferable and the same cannot be exchanged for money. Users can only avail discounts using the reward points/ loyalty points which shall be available to users at the time of making payments for the new subscriptions. The loyalty/reward points shall be valid for a period of 6 months only and the validity of the same cannot be extended under any circumstance/s.<br />\n<br />\nCHILDREN<br />\nM/s Balance Nutrition does not knowingly or unknowingly seek or collect any personal information from children that are under the age of 13. If at any point of time Balance Nutrition realises that it has inadvertently gathered any sort of personal information from a user who is under the age of 13 then the same shall be deleted from our records immediately. Our website www.balancenutrition.in and our mobile application does not allow users below the age of 13 to register. If you are under the age of 13 then you are not allowed to provide and submit any personal data to us. If you are aware that a child under the age of 13 has submitted any personal data to us then please contact us immediately on info@balancenutrition.in.<br />\n<br />\nGENERAL DATA PROTECTION REGULATION:<br />\nPolicies of M/s Balance Nutrition are complaint with the European Union’s General Data Protection Regulation. As per the policies of the General Data Protection Regulation, you shall have more control over your data, hereby making your experience safe and secure. You as a user have the right to ask for rectification (amendment), deletion of your data by writing to us on info@balancenutrition.in. You as a user have the right to be informed about the manner in which your personal data is collected and used. You further have a right to access your own data in the My Accounts section of our Mobile Application and the website www.balancenutrition.in and a copy of the same can also be availed by e-mailing us on info@balancenutrition.in . You can contact our grievance officer Mr. Navin Thakur on Contact Number: 022-26600273 E-mail ID info@balancenutrition.in in case you wish to exercise any of the above mentioned rights as a user.<br />\n<br />\nPROFILING<br />\nM/s Balance Nutrition’s services are knowledge based and we use the best practices in the industry to make sure our clients benefit from our services. We hire/work with expert nutritionists to add value to our services. In addition to that we analyse your usage of our services in order to give all our users with relevant and features as per their likes. In order to analyse your usage of the services M/s Balance Nutrition processes certain data for the profiling purposes. Profiling means that we will analyse the way you use our services on the basis of the data you process. We further analyse user habits, services that keep the users engaged and search for ways or methods to make our services more effective, user friendly and vary the features as per individual usage patterns. Our processing of your personal data for profiling does not require any consent as a legal ground. If under any provisions relevant personal data consent is required for the use of data processed as mentioned above then by accepting the terms you have hereby given your consent to M/s Balance Nutrition to use the personal data processed by you for the purpose of profiling, improving services and for providing you with customer support.<br />\n<br />\nMARKETING<br />\nM/s Balance Nutrition may use your personal data for profiling and marketing via emails, notifications, updates, calls or messages by M/s Balance Nutrition. Profiling may be used for marketing purpose to enable personalized features/experiences based on your preferences and usage pattern. No personal data provided by you shall be transferred to any third party for any purposes. The data you process on the Application or the website of M/s Balance Nutrition shall only be used to provide you best services and relevant user experience. In case you do not want Balance Nutrition to use your personal data for the purpose of marketing you may at any given point of time click “UNSUBSCRIBE” at the bottom of the email or write to us at info@balancenutrition.in.<br />\n<br />\nRECTIFICATION OR DELETION<br />\nYou as a user have complete control over your data and what you process and hence you have the right to access and to rectify or deletion of your personal data by M/s Balance Nutrition. If you make a request for rectification that concerns data that is compulsorily required by M/s Balance Nutrition for offering you services then such a request will have an effect of account termination by M/s Balance Nutrition. All your requests for Rectification or Deletion of personal data shall be made on info@balancenutrition.in in addition to a written Application made by you which must be signed.<br />\n<br />\nCANCELLATION OF ACCOUNT<br />\nYou can at any point of time choose to cancel your subscription or to de-activate your account. It is pertinent to note that uninstalling the Balance Nutrition Application will not de-activate your account or cancel your subscription. You can cancel your subscription from the mobile Application or the website www.balancenutrition.in.<br />\n<br />\nPUBLISHED CONTENT<br />\nAll success stories, comments, messages and testimonials conveyed by you through on the “Success Stories” section of the website www.balancenutrition.in and this mobile Application shall be published content. M/s Balance Nutrition will publish such content as long as you consent to it. You may by a communication to us in writing at any time may ask such published content to be taken down.<br />\n<br />\nGRIEVANCE OFFICER<br />\nIf you have any complaints or grievances regarding processing of your personal data on the website www.balancenutrition.in or our mobile Application or any of our services then you may contact our grievance officer on Contact Number: 022-26600273 email: info@balancenutrition.in having address:<br />\nA-2, A-3 and A-4 Shalimar C.H.S., Ground Floor, Tagore Road, Society Store Lane, Hasmukh Nagar, Santacruz(West), Mumbai – 400054, Maharashtra, India.<br />\n<br />\nUSE OF PERSONAL INFORMATION<br />\nThe information that you as a visitor/user, client share with us on this mobile Application or our website www.balancenutrition.in is used to personalize and improve your experience continuously. We at M/s Balance Nutrition also use this information to assist our employees to process your information in our database, to help you and the mentors(nutritionists) and other employees of M/s Balance Nutrition to communicate regarding services, products, offers and promotions, billing information, reviews etc. We further use the information shared by you to improve our website and to detect frauds and to give you a risk free experience every time you visit our website, domain, mobile Application etc.<br />\n<br />\nWe may share this information with government agencies or other companies assisting us in fraud prevention or investigation. We may do so when: (1) permitted or required by law; or, (2) trying to protect against or prevent actual or potential fraud or unauthorized transactions; or, (3) investigating fraud which has already taken place.<br />\n<br />\nCOMMITTED TO DATA SECURITY<br />\nYour personally identifiable information is kept secure. Only authorized employees (who have agreed to keep information secure and confidential) have access to this information. The security of your personal information is important to us at M/s Balance Nutrition. We use accepted industry standards and technologies like firewalls, security software etc to protect your personal data against unauthorised access in addition to complying with the relevant personal data regulations. You are however aware that no security system is 100% secure and despite our best efforts there is always a risk of unauthorised access to your data. We at M/s Balance Nutrition therefore request you to use a very strong password for your user account with M/s Balance Nutrition and to keep the login account and password safely. Our endeavour shall always be to safeguard your security information and personal details in every possible manner.<br />\n<br />\nCHANGES TO THE POLICIES<br />\nM/s Balance Nutrition may have to make changes or update the Privacy Policies from time to time in accordance with the change in laws and change in circumstances. These changes shall be incorporated by giving a notice to you. You are bound by all the policy changes if you continue using this mobile Application and our website www.balancenutrition.in. The date of last modification shall be posted right before the Privacy Policies.<br />\n<br />\nHEALTH DISCLAIMER<br />\nYou shall be responsible for your own health. M/s Balance Nutrition is an organisation that only gives you diet plans to stay fit and to live a healthy lifestyle. M/s Balance Nutrition is not a medical organisation and hence we do not provide you with any medical advice or diagnosis. Information made available by the subscription of our services through the Application and the website www.balancenutrition.in is only for informative purposes. You must always consult your doctor/physician before starting any diet/nutrition plan or if you feel any pain or discomfort. We do not guarantee any weight loss or health improvement. M/s Balance Nutrition shall in no way be held responsible for any personal injury or any other damages caused to you by use or misuse of our Services.<br />\n<br />\nINTELLECTUAL PROPERTY<br />\nAll rights in and to the Services, including any trademarks, trade names, logos, illustrations, service marks, copyrighted content (collectively referred to as “Intellectual Property” presented within the services i.e. on the website www.balancenutrition.in, the mobile Application : Balance Nutrition and any other platform shall always be the property of M/s Balance Nutrition. You undertake to not use the Intellectual Property for any other purposes except till the extentof services provided to you.<br />\n<br />\nDISCLAIMER<br />\nThe information shared on this Mobile Application and on the website www.balancenutrition.in is general information provided by<br />\nM/s BALANCE NUTRITION and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, services, or related graphics contained on the website for any purpose. Any of such information is therefore strictly at your own risk.<br />\n<br />\nIn no event shall M/s Balance Nutrition be liable for any loss or damage including without limitation, direct, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data, health or profits or any loss or damage arising out of, or in connection with the use of this Application or the website www.balancenutrition.in. You hereby indemnify and agree to hold M/s Balance Nutrition  harmless from loss or damage of whatsoever nature caused to you or any other person from the use of our services. Every effort is made to keep the website www.balancenutrition.in and this mobile Application up and running smoothly. However, M/s BALANCE NUTRITION takes no responsibility for, and will not be liable for, this mobile Application and the website www.balancenutrition.in being temporarily unavailable due to technical issues beyond the control of M/s Balance Nutrition.<br />\n<br />\nGOVERNING LAW & DISPUTE RESOLUTION<br />\nThese terms of use of the Services are governed by the laws of India and only Courts in Mumbai, India shall have exclusive jurisdiction for claims arising out of or relating to these terms and conditions or the Service. M/s Balance Nutrition accepts no liability whatsoever, direct or indirect, for non-compliance with the laws of any country other than that of India, the fact that our website www.balancenutrition.in and our mobile Application can be accessed or used or any of our facilities can be availed of in a country other than India will not imply that we accede to the laws of such country.<br />\n<br />\nENTIRE AGREEMENT :-<br />\nThis Agreement constitutes the entire agreement between you i.e. the user and M/s Balance Nutrition relating to the website www.balancenutrition.in and this mobile Application “Balance Nutrition” and supersedes all prior or contemporaneous oral or written communications including but not limited to any terms and conditions of purchase, proposals and representations with respect to the Application or any other subject matter covered by this Agreement. The headings in this Agreement are for convenience only and do not affect the interpretation of this Agreement.<br />\n<br />\nSEVERABILITY CLAUSE<br />\nIf any provisions of this Agreement is/are held to be void, invalid, unenforceable or illegal by a court of competent jurisdiction then other such provisions shall be set aside and the remaining provisions shall continue in full force and effect.<br />\n<br />\nRELATION BETWEEN WEBSITE AND LEGAL NAME<br />\nThe website www.balancenutrition.in and the associated mobile Application “BalanceNutrition”, are registered and owned by<br />\nM/s Balance Nutrition.<br />\n<br />\nCONTACT US<br />\nM/s Balance Nutrition shall communicate with you vide email and notices posted on your mobile device. We welcome your feedback regarding our services. If you have any questions or suggestions regarding our privacy policies, then you can contact us on info@balancenutrition.in.<br />\n<br />\n",
    },
  };
  return res.status(200).json(responseData);
};
