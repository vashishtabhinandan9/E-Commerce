import express from "express";
import Authrouter from "./AuthRouter.js";
const router = express.Router();

router.use('/', Authrouter);

export { router };