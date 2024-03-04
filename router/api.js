const express = require("express");
const router = express.Router();
const Helper = require("../helper/function");
const usersController = require("../controller/usersController");
const notificationController = require("../controller/notificationController");
const relationshipController = require("../controller/relationshipController");


const { upload } = require("../utils/multer");

router.post("/login", async (req, res) => {
  try {
    const resp = await usersController.Login(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/login-demo", async (req, res) => {
  try {
    const resp = await usersController.LoginDemo(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/otpMatch", async (req, res) => {
  try {
    const resp = await usersController.otpMatch(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/validate_save_pan", async (req, res) => {
  try {
    const resp = await usersController.validatePan(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/pan_ocr", upload.single("file"), async (req, res) => {
  try {
    const resp = await usersController.panOcr(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

// Define the file upload route
router.post("/aadhar_front", upload.single("file"), async (req, res) => {
  try {
    const resp = await usersController.aadhaarOcrFront(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/aadhar_back", upload.single("file"), async (req, res) => {
  try {
    const resp = await usersController.aadhaarOcrBack(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/seeKyc", async (req, res) => {
  try {
    const resp = await usersController.seeKycData(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/getName", async (req, res) => {
  try {
    const resp = await usersController.getNameData(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/getKycDetails", async (req, res) => {
  try {
    const resp = await usersController.getKycDetails(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/getAadharNumber", async (req, res) => {
  try {
    const resp = await usersController.getMobileToAadhaarNumber(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/validate_aadhaar", async (req, res) => {
  try {
    const resp = await usersController.validateAadhaar(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/generate_otp", async (req, res) => {
  try {
    const resp = await usersController.generateAadharOtp(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/submit_otp", async (req, res) => {
  try {
    const resp = await usersController.submitAadhaarOtp(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/create_user_id", async (req, res) => {
  try {
    const resp = await usersController.createUserID(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/find_user_id", async (req, res) => {
  try {
    const resp = await usersController.findUserID(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/get_user_id", async (req, res) => {
  try {
    const resp = await usersController.getUserID(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/user_AuthPin_Create", async (req, res) => {
  try {
    const resp = await usersController.userAuthPinCreate(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/user_AuthPin_Login", async (req, res) => {
  try {
    const resp = await usersController.userAuthPinLogin(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/getUser_Scan_Profile", async (req, res) => {
  try {
    const resp = await usersController.getUserScanProfile(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/getAuth_create", async (req, res) => {
  try {
    const resp = await usersController.userAuthorizedCreateData(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/getAuthID_History", async (req, res) => {
  try {
    const resp = await usersController.userAuthIDHistory(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/get_ALL_AuthID_History", async (req, res) => {
  try {
    const resp = await usersController.userAuthorizedHistory(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/get_ALL_NotificationData", async (req, res) => {
    try {
      const resp = await notificationController.NotificationData(req, res);
      return resp;
    } catch (error) {
      console.log(error);
      return res.status(200).json({ status: false, message: error });
    }
  });

router.post("/checkMobileNumbers",async(req, res) => {
  try {
    const resp = await usersController.checkMobileNumbers(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/relationshipsCreate",async(req, res) => {
  try {
    const resp = await relationshipController.relationshipsCreate(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/getRelationshipsData",async(req, res) => {
  try {
    const resp = await relationshipController.getRelationshipsData(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/relationshipsApprove",async(req, res) => {
  try {
    const resp = await relationshipController.relationshipsApprove(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});

router.post("/getRelationshipsAllbyUser",async(req, res) => {
  try {
    const resp = await relationshipController.getRelationshipsAllbyUser(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/relationshipGroupCreate",async(req, res) => {
  try {
    const resp = await relationshipController.relationshipGroupCreate(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/getRelationshipGroup",async(req, res) => {
  try {
    const resp = await relationshipController.getRelationshipsGroupAllbyUser(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
router.post("/userWebLoginSession",async(req, res) => {
  try {
    const resp = await relationshipController.getRelationshipsGroupAllbyUser(req, res);
    return resp;
  } catch (error) {
    console.log(error);
    return res.status(200).json({ status: false, message: error });
  }
});
module.exports = router;
