const Users = require("../../models/users");

async function otpMatch(req, res) {
    try {
      const { session_id,  } =
        req.body;
      console.log("mobileNumber::::OTP", mobile, otp);
  
      // Validate mobile number and OTP
      if (!mobile || !otp) {
        return res
          .status(400)
          .json({ status: false, message: "Mobile number and OTP are required" });
      }
  
      const user = await Users.findOne({ mobileNumber: mobile });
  
      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User does not exist" });
      }
  
      if (!(await bcrypt.compare(otp, user.otpDetails.otp))) {
        return res.status(200).json({ status: false, message: "Invalid OTP" });
      } else if (user && (await bcrypt.compare(otp, user.otpDetails.otp))) {
        // // Generate JWT Token
        // const jwtkey = process.env.JWT_SECRET;
        // const payload = {
        //     sub: mobileNumber,
        //     iat: Math.floor(Date.now() / 1000),
        // };
        // const token = jwt.sign(payload, jwtkey, {
        //     expiresIn: "24h"
        // });
  
        const data = { mobileNumber: mobile };
        const dbupdate = await Users.updateOne(
          { mobileNumber: mobile },
          {
            $set: {
              isMobileVerified: true,
              deviceInfo: {
                deviceId: deviceId ? deviceId : "",
                deviceType: deviceType ? deviceType : "",
                deviceName: deviceName ? deviceName : "",
                deviceOS: deviceOS ? deviceOS : "",
              },
            },
          }
        );
        // user.isMobileVerified = true;
        // await user.save();
        // console.log(dbupdate, "OTP::upadte");
        await whatsappBussinessLoginMsg(mobile);
        await setNotificationData(user.userId, notificationConfig.type.login, notificationConfig.event.login);
        return res
          .status(200)
          .json({ status: true, message: "Login successful", data: data });
      }
    } catch (error) {
      console.error("Error:", error);
      return res
        .status(500)
        .json({ status: false, message: "Internal Server Error" });
    }
  }
  