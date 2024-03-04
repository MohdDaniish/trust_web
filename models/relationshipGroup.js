const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the user activity
const userSchema = new Schema({
  groupName: { type: String, required: true },
  groupId: {type: String, required: true },
  relationshipIds: { type: Array, required: true},
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}, {collection: "RelationshipGroup" });

// Create a model based on the schema
const relationshipGroup = mongoose.model('RelationshipGroup', userSchema);

module.exports = relationshipGroup;
