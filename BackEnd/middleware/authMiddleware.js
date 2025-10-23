import JWT from "jsonwebtoken"; // JWT for token verification
import color from "colors"; // For colored console output

// Middleware to enforce sign-in
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization; // Retrieve token
    if (!token) { // Token missing check
      return res.status(401).json({ success: false, message: "Error in identifying User" }); // Missing token error
    }

    const decoded = await JWT.verify(token, process.env.JSON_SECRET_KEY); // Verify token
    req.user = decoded; // Attach user data to request

    next(); // Proceed to next middleware
  } catch (error) {
    if (error.name === "TokenExpiredError") { // Expired token error
      return res.status(401).json({ success: false, message: "Login timeOut" });
    } else if (error.name === "JsonWebTokenError") { // Invalid token error
      return res.status(401).json({ success: false, message: "Invalid Login" });
    }

    console.error(`Error: ${error.message}`.red); // Log error
    res.status(500).json({ success: false, message: "Failed to authenticate User identity", error: error.message }); // Server error
  }
};
