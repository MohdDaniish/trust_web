const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: { type: String},
    username: { type: String},
    isSetUserVerified: { type: Boolean ,default: false},
    mobileNumber: {
      type: String,
    //   required: true,
    //   unique: true
    },
    isMobileVerified: {
      type: Boolean,
      default: false,
    },
    otpDetails: {
      otp: { type: String, required: true },
      otpExpiresIn: {
        type: Date,
        default: () => new Date(Date.now() + 5 * 60 * 1000),
        required: true,
      },
    },
    documents: {
      pan: {
        number: { type: String, default: null }, // Use null instead of empty string
        isVerified: { type: Boolean, default: false },
        imageURL: { type: String, default: null },
        verifiedAt: { type: Date, default: null }, // Use null instead of empty string
        details: {
          name: { type: String, default: null },
          fatherName: { type: String, default: null },
          dob: { type: String, default: null },
          address: { type: Object, default: null },
          masked_aadhar: {type: String, default: null },
          aadhar_linked: {type: String, default: null },
        },
      },
      aadhar: {
        number: { type: String, default: null },
        isVerified: { type: Boolean, default: false },
        imageURLfront: { type: String, default: null },
        imageURLback: { type: String, default: null },
        verifiedAt: { type: Date, default: null },
        details: {
          name: { type: String, default: null },
          fatherName: { type: String, default: null },
          dob: { type: String, default: null },
          address: { type: Object, default: null },
        },
      },
      voterId: {
        number: { type: String, default: null },
        isVerified: { type: Boolean, default: false },
        imageURL: { type: String, default: null },
        verifiedAt: { type: Date, default: null },
      },
      drivingLicense: {
        number: { type: String, default: null },
        isVerified: { type: Boolean, default: false},
        imageURL: { type: String, default: null },
        verifiedAt: { type: Date, default: null },
      },
      passport: {
        number: { type: String, default: null },
        isVerified: { type: Boolean, default: false },
        imageURL: { type: String, default: null },
        verifiedAt: { type: Date, default: null },
      },
    },
    faceVerification: {
      isVerified: { type: Boolean, default: false },
      imageURL: { type: String, default: null },
      verifiedAt: { type: Date, default: null },
      details: {
        confidenceScore: { type: Number, default: null },
      },
    },
    bankDetails: {
      accountNumber: { type: String, default: null },
      accountName: { type: String, default: null },
      ifscCode: { type: String, default: null },
      isVerified: { type: Boolean, default: false },
      verifiedAt: { type: Date, default: null },
    },
    upiDetails: {
      upiId: { type: String, default: null },
      isVerified: { type: Boolean, default: false },
      verifiedAt: { type: Date, default: null },
    },
    wallet: {
      balance: { type: Number, default: 0 },
    },
    qrCode: {
      imageURL: { type: String, default: null },
      deepLink: { type: String, default: null },
      createdAt: { type: Date, default: Date.now },
    },
    deviceInfo: {
      deviceId: { type: String },
      deviceType: { type: String },
      deviceName: { type: String },
      deviceOS: { type: String },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, collection: "Users" }
);
// Create indexes for unique fields
// userSchema.index({ mobileNumber: 1, 'documents.pan.number': 1 });
const User = mongoose.model("Users", userSchema);

module.exports = User;
