import { aiSession } from "../aiInitialization.js"; // Import AI session
export async function analyzeMessage(msg) {
  if (!aiSession) {
    console.error("AI session not created"); // Log missing session
    console.log("Virox Reply : Virox AI is under training—feel free to explore our other models and services!".red); // Return error
    return "Virox AI is under training—feel free to explore our other models and services!"; // Return error
  }
  try {
    console.log("Sending prompt to AI model...");
    let botReply = await aiSession.prompt(msg); // Get AI response
    const replacements = {
      lily: "Virox",
      "Sego Lily Labs": "Virusviper officials",
      "SenseTech Ltd": "Virusviper officials",
      "SenseTech Labs": "Virusviper officials",
      "Error processing response. Please try again.":
        "I apologize, but I didn't understand.",
    };
    botReply = Object.entries(replacements).reduce(
      (reply, [word, replacement]) => {
        const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`\\b${escapedWord}\\b`, "gi"); // Match whole words, case-insensitive
        return reply.replace(regex, replacement); // Replace occurrences in botReply
      },
      botReply
    );
    console.log(`Virox Reply: ${botReply}`.green); // Log final reply
    return botReply; // Return reply
  } catch (error) {
    // Enhanced error handling
    if (error.message.includes("ErrorOutOfDeviceMemory")) {
      console.error("GPU memory is insufficient. Attempting fallback...".red);
      return "Virox AI is under training—feel free to explore our other models and services!";
    } else {
      console.error(`Error: ${error.message}`.red); // Log other errors
      return "Virox AI is under training—feel free to explore our other models and services!";
    }
  }
}
