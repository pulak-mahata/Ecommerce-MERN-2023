import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authmiddleware.js";

const router = express.Router();

//routing
//Register | Method : POST

router.post("/register", registerController);

//Login
//Method POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes get
router.get("/test", requireSignin, isAdmin, testController);

//private protected route
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});

//private  admin protected route
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile

router.put("/profile", requireSignin, updateProfileController);

//orders
router.get("/orders", requireSignin, getOrdersController);

// All orders
router.get("/all-orders", requireSignin, isAdmin, getAllOrdersController);

//order status update
router.put(
  "/order-status/:orderId",
  requireSignin,
  isAdmin,
  orderStatusController
);

export default router;
