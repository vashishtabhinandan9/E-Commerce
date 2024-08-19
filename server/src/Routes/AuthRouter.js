import express from "express";
import passport from "passport";
import { SignUp, SignIn } from "../Controller/AuthController.js";
const Authrouter = express.Router();


Authrouter.post('/signup', SignUp);
Authrouter.post('/signin', SignIn);



export default Authrouter;