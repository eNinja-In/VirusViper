import axios from "axios";
import express from "express";

export async function GeetaReq(req, res) {
  const { query } = req.body;
  const email = "null";
  const locale = "en";
  const apiUrl = process.env.GITA_BOT;

  try {
    console.log(`Query for Geeta: ${query}`.white.bgBlue);
    const timeout = 5000; // Set timeout to 10 seconds
    const getResponse = await axios.get(apiUrl, {
      params: {
        q: query,
        email: email || "null",
        locale: locale || "en",
      },
      timeout: timeout,
    });

    const data = getResponse.data;
    console.log(`Geeta Reply: ${data.response}`.green);
    if (data.response) {
      // Modify response data
      let modifiedResponse = data.response.replace(
        "GitaGpt.org",
        "Virusviper Havenyz"
      );
      // let modifiedId = data.id.replace("oldId", "newId");

      res.status(200).json({
        message: "Request successful.",
        response: modifiedResponse,
        id: data.id,
        show_follow: data.show_follow,
      });
      // await sendEmail(message, "User Login Notification");
    } else {
      res.status(400).json({ error: "No response found in the data." });
    }
  } catch (error) {
    if (error.response) {
      res.status(error.response.status || 500).json({
        error: "Error in fetching data from VirusviperServer",
        details: error.response.data || error.message,
      });
    } else if (error.code === "ECONNABORTED") {
      res.status(408).json({ error: "Request timed out." });
    } else {
      res.status(500).json({
        error: "Failed to process the request",
        details: error.message,
      });
    }
  }
}

const router = express.Router();
router.post("/", GeetaReq);

export default router;
