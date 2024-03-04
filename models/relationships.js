const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the user activity
const userSchema = new Schema({
  user1Id: { type: String, required: true },
  user2Id: { type: String, required: true },
  relationshipId: { type: String, required: true},
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
  confirmedAt: {type: Date, default: null}

}, {collection: "Relationships" });

// Create a model based on the schema
const notifications = mongoose.model('Relationships', userSchema);

module.exports = notifications;
