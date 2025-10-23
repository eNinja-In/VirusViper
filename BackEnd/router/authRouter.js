import express from "express"; 
import { textController, registerController, loginController } from "../controller/authController.js"; 
import { requireSignIn } from "../middleware/authMiddleware.js"; 

const router = express.Router(); 

router.post('/register-user', registerController); // User registration route
router.post('/login-user', loginController); // User login route
router.get('/protected', requireSignIn, textController); // Protected test route

export default router; // Exporting the router
