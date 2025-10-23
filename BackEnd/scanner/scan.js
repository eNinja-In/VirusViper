import axios from "axios";
import express from "express";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Utility function to add delay
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Main function to handle the POST request
export async function scanPostRequest(req, res) {
  const { urlToScan } = req.body;
  console.log(urlToScan.green);
  // Check if URL is valid
  if (urlToScan.includes("typedef")) {
    return res.status(200).json({ message: "hi wrong not valid" });
  }

  const apiUrl = process.env.VIRUS_TOTAL_URL;
  const apiKey = process.env.VIRUS_TOTAL_API;

  // Check if environment variables are set
  if (!apiUrl || !apiKey) {
    console.log("Missing API URL or API key".red)
  }

  try {
    // First request: POST to get analysis ID
    const postResponse = await axios.post(
      `${apiUrl}/urls`,
      new URLSearchParams({ url: urlToScan }),
      {
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
          "x-apikey": apiKey,
        },
      }
    );

    const id = postResponse.data.data.id;
    const idUrl = `${apiUrl}/analyses/${id}`;

    // Wait for 3 seconds
    await wait(3000);

    // Second request: GET analysis result
    const firstGetResponse = await axios.get(idUrl, {
      headers: {
        accept: "application/json",
        "x-apikey": apiKey,
      },
    });

    await wait(5000);

    // Third request: GET analysis result again
    const secondGetResponse = await axios.get(idUrl, {
      headers: {
        accept: "application/json",
        "x-apikey": apiKey,
      },
    });

    // Save the last response to a log file
    fs.writeFileSync(
      "response.log",
      JSON.stringify(secondGetResponse.data, null, 2),
      { flag: "w" }
    );

    // Send the final response to the client
    res.status(200).json({
      message: "Analysis completed successfully.",
      data: secondGetResponse.data,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ error: "Failed to process the request"});
      // .json({ error: "Failed to process the request", details: error.message });
  }
}

// Create the router
const router = express.Router();
router.post("/", scanPostRequest);

export default router;
