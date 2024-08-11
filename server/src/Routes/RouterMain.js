import express from "express";
import AuthRouter from './AuthRouter'
const router= express.Router();

router.use('/',AuthRouter);

export default router;