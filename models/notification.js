const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the user activity
const userSchema = new Schema({
    
  userId: { type: String, required: true },
  type: { type: String, required: true },
  event: { type: String, required: true } ,
  auth_to: { type: String, default: null },
  auth_type: { type: String, default: null },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }

}, { timestamps: true, collection: "Notifications" });

// Create a model based on the schema
const notifications = mongoose.model('Notifications', userSchema);

module.exports = notifications;
