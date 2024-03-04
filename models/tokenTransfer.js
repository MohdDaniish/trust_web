const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the schema
const userSchema = new Schema({

  tokenId: { type: String, required: true },
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  location: { type: Object , required: true},
  createdAt: { type: Date, default: Date.now },
  status: { type: String, required: true }

},  { timestamps: true, collection: "TokenTransfers" }
);

// Create a model based on the schema
const TokenTransfers = mongoose.model('TokenTransfers', userSchema);

module.exports = TokenTransfers;
