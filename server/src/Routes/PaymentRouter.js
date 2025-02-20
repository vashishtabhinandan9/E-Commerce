import express from "express";

import { razorpayCreateOrder, razorpayPayment } from "../Controller/PaymentController.js";
const RazorpayRouter = express.Router();
RazorpayRouter.get("/", razorpayPayment)
RazorpayRouter.post("/create-order", razorpayCreateOrder);

export default RazorpayRouter;