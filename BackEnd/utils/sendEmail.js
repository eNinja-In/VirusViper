import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Nodemailer configuration using Google App Password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Google App Password
  }
});

/**
 * Send an email using Nodemailer
 * @param {string} message - The content of the email
 * @param {string} subject - The subject of the email
 */
export const sendEmail = (message, subject) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email
    to: process.env.ADMIN_EMAIL, // Admin's receiving email
    subject: subject,
    text: message
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        reject(error);
      } else {
        console.log("Email sent:", info.response);
        resolve(info.response);
      }
    });
  });
};
