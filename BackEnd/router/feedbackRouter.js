// routes/feedbackRoutes.js
import express from "express";
import Feedback from "../models/feedBackModel.js";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

// POST feedback route
router.post("/", async (req, res) => {
  try {
    const { name, email, query } = req.body;
    
    // Validate input
    if (!name || !email || !query) {
      return res.status(400).json({ message: "Name, email, and query are required." });
    }

    // Save feedback to the database
    const feedback = new Feedback({ name, email, query });
    await feedback.save();

    // Email message and subject
    const message = `You received a new feedback from ${name} (${email}):\n\n${query}`;
    const subject = "New Feedback Received";

    // Send email using the utility function
    try {
      await sendEmail(message, subject);
      res.status(201).json({ message: "Feedback Submitted Successfully" });
    } catch (emailError) {
      res.status(202).json({ 
        message: "Server Error Try Again::",
        error: emailError.message 
      });
    }
  } catch (dbError) {
    res.status(500).json({ message: "Server Error Try Again", error: dbError.message });
  }
});

// GET feedback route
router.get("/", async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ createdAt: -1 });
    
    // Check if feedback is empty
    if (feedbackList.length === 0) {
      return res.status(404).json({ message: "Enter Detail Correctly" });
    }

    res.status(200).json(feedbackList);
  } catch (dbError) {
    res.status(500).json({ message: "Server Error Try Again", error: dbError.message });
  }
});

export default router;
