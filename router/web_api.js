const express = require('express');
const uuid = require('uuid');
const User = require('../models/users');
const qr = require('qr-image');
const weblogin = require('../models/webLogin');
const router = express.Router();
//const bodyParser = require('body-parser');
//const { verifyUserToken } = require('./auth'); // Implement this function based on your auth system


//app.use(bodyParser.json());

// Generate and display QR code
router.get('/generate-qr', async (req, res) => {
    const sessionId = uuid.v4();
    const qrSVG = qr.image(sessionId, { type: 'svg' });
    console.log("session :",sessionId)
    const sesss = new weblogin({
        sessionId: sessionId,
                    });
              // Save the Session to the database
    const sess_ = await sesss.save();
    if(sess_){
    res.type('svg');
    qrSVG.pipe(res);
      }
    });

// Mobile app posts to this endpoint after scanning
router.post('/verify-qr', async (req, res) => {
    const { sessionId, userId } = req.body;

    console.log(sessionId);
    console.log(userId);

    // Check if sessionId or userId are undefined
    if (!sessionId || !userId) {
        return res.status(400).json({ status: false, message: "Empty Payload" });
    }

    try {
        // Find the user by userId
        //const userIdObject = new mongoose.Types.ObjectId(userId);

        const user = await User.findOne({ _id: userId });

        // Find the session by sessionId
        const sess_id = await weblogin.findOne({ sessionId: sessionId });

        if (user) {
            // Update session status as authenticated if the session exists
            if (sess_id) {
                await weblogin.updateOne(
                    { sessionId: sessionId },
                    { $set: { userId: userId  } }
                );
                return res.status(200).json({ status: true, message: "User authenticated" });
            } else {
                return res.status(404).json({ status: false, message: "Session not found" });
            }
        } else {
            return res.status(404).json({ status: false, message: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});

module.exports = router;
