const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the schema
const userSchema = new Schema({
  tokenId: { type: String, required: true },
  authorizedData: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true, collection: "TokenDataTypes" });

// Create a model based on the schema
const TokenDataTypes = mongoose.model('TokenDataTypes', userSchema);

module.exports = TokenDataTypes;
