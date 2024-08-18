import express from "express";
import passport from "passport";
import { SignUp, SignIn, GoogleCallback, GoogleScope } from "../Controller/AuthController.js";
const Authrouter = express.Router();


Authrouter.post('/signup', SignUp);
Authrouter.post('/signin', SignIn);

// Google Auth Routes
Authrouter.get('/auth/google', GoogleScope);
Authrouter.get('/auth/google/callback', passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        //console.log(res);
        res.redirect('http://localhost:5173/')
        //res.redirect('/');
    });


export default Authrouter;