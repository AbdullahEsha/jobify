import express from "express";

const router = express.Router();

//import controllers
import { loginUser, registerUser, changePassword } from "../controllers";
import { checkAdmin, protect } from "../middlewares";

//routes
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

// protected routes
router.route("/change-password").post(changePassword).all(protect, checkAdmin);

export { router as credentialRouter };
