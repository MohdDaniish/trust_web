const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  toUserID: { type: String, required: true },
  fromUserID: { type: String, required: true },
  verifyAuthType: { type: String, required: true },
  verifyAuthID: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
},
{ timestamps: true, collection: "UserAuthHistory" }
);

const UserAuthHistory = mongoose.model("UserAuthHistory", userSchema);

module.exports = UserAuthHistory;
