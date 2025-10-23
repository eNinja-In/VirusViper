// Import mongoose, a MongoDB object modeling tool
import mongoose from "mongoose"; 

// Define the schema for the feedback form data
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  query: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Mongoose model based on the feedback schema
const Feedback = mongoose.model("Feedback", feedbackSchema);

// Export the Feedback model for use in other parts of the application
export default Feedback;