import mongoose from "mongoose"; // Import mongoose for MongoDB schema

// Define user schema with validation and default values
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 3 }, // User's name
    email: { type: String, required: true, unique: true, lowercase: true, match: [/.+\@.+\..+/, "Invalid email format"] }, // Email validation
    password: { type: String, required: true, minlength: 8 }, // Password validation
    // isPremium: { type: Boolean, default: false }, // Subscription status
    // planExpiryDate: { type: Date, default: null }, // Subscription expiry date
    profile: {
      bio: { type: String, maxlength: 300 }, // Optional bio
      website: { type: String, match: [/^https?:\/\/.+/, "Invalid URL format"] }, // Website validation
    },
  },
  { timestamps: true } // Automatically manage timestamps
);

// Method to check if subscription is active
userSchema.methods.isSubscriptionActive = function () {
  return (
    this.isPremium && // Check if premium
    this.planExpiryDate && // Ensure expiry date exists
    this.planExpiryDate > new Date() // Check if valid
  );
};

// Create and export the UserModel
const UserModel = mongoose.model("VirusUser", userSchema);
export default UserModel;
