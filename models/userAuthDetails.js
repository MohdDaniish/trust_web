const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  pinHash: {
    type: String,
    required: true
  },
  failedAttempts: {
    type: Number,
    default: 0
  },
  lockoutUntil: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
},
{ timestamps: true, collection: "UserAuthDetails" }
);

const UserAuthDetails = mongoose.model('UserAuthDetails', userSchema);

module.exports = UserAuthDetails;
