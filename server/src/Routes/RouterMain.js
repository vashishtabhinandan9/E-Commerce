import express from "express";
import Authrouter from "./AuthRouter.js";
import CategoryRouter from "./CategoryRouter.js";
const router = express.Router();

router.use('/', Authrouter);
router.use('/category', CategoryRouter)
export { router };