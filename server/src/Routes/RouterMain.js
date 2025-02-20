import express from "express";
import Authrouter from "./AuthRouter.js";
import CategoryRouter from "./CategoryRouter.js";
import ProductRouter from "./ProductRouter.js";
import RazorpayRouter from "./PaymentRouter.js";
const router = express.Router();

router.use('/', Authrouter);
router.use('/category', CategoryRouter);
router.use('/product', ProductRouter);
router.use('/payment', RazorpayRouter);

export { router };