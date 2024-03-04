const mongoose = require("mongoose");
const { Schema } = mongoose;

const webloginSchema = new Schema(
  {
  
      userId: { type:  String, default:null},
      sessionId: { type: String, default: null},
      expiresIn: {type: Date, default: null}
   
  },
  { timestamps: true, collection: "weblogins" }
);

webloginSchema.index({ createdAt: 1 }, { expireAfterSeconds: 43200 });
// Create indexes for unique fields
// userSchema.index({ mobileNumber: 1, 'documents.pan.number': 1 });
const Weblogin = mongoose.model("weblogins", webloginSchema);

module.exports = Weblogin;
