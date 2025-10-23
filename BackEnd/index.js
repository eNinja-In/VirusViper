import express from "express"; // Express framework
import dotenv from "dotenv"; // Load env variables
import connectDB from "./config/dB.js"; // DB connection
import router from "./router/authRouter.js"; // Auth routes
import cors from "cors"; // CORS middleware
import helmet from "helmet"; // Security middleware
import morgan from "morgan"; // Request logger
import rateLimit from "express-rate-limit"; // Rate limiter
import { createServer } from "http"; // HTTP server
import { Server } from "socket.io"; // WebSocket server
import path from "node:path";
import { fileURLToPath } from "url"; // Convert URL to path
import feedbackRoutes from "./router/feedbackRouter.js"; // Feedback routes
import "colors"; // Colored console output
import sendPostRequest from "./scanner/scan.js"; // Virus scan API
import { GeetaReq } from "./BG/bhagwatGeeta.js";
// import { initializeAImodel } from "./aiInitialization.js"; // AI model init
import { analyzeMessage } from "./AI/analyzeAI.js"; // Analyze message

dotenv.config(); // Load .env

const __filename = fileURLToPath(import.meta.url); // Current file path
const __dirname = path.dirname(__filename);

const app = express(); // Express app

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(cors());
connectDB();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 7,
  message: "Too many requests from this IP, please try again later.",
});

app.set("trust proxy", 10);

app.use(limiter); // Apply rate limiter
app.use("/api/auth", router); // Auth routes
app.use("/api/feedback", feedbackRoutes); // Feedback routes
app.use("/api/scan-Link", sendPostRequest);
app.use("/api/bhagwat-geeta", GeetaReq);

const server = createServer(app); // Create HTTP server
const io = new Server(server, {
  cors: { origin: "*" },
});

// initializeAImodel(); // Initialize AI model

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("message", async (msg) => {
    console.log(`Message for Virox: ${msg}`.white.bgBlue);
    const botReply = await analyzeMessage(msg);
    socket.emit("response", botReply); // Send bot reply
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 8080; // Set port
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
