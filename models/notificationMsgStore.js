const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({

    event: { type: String },
    message: { type: String },

  }, { timestamps: true, collection: "NotificationMessages" });

  // Create a model based on the schema
const notificationsMSG = mongoose.model('NotificationMessages', userSchema);

module.exports = notificationsMSG;
