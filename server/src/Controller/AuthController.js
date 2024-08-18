import express from "express"
import bcrypt from 'bcryptjs'
import { SignInSchema, SignUpSchema } from "../ZodSchema/AuthSchema.js";
import { PrismaClient } from "@prisma/client";
import { generateJwtToken } from "../Helper/AuthHelper.js";
import passport from 'passport';
const prisma = new PrismaClient();
/*
Route     /signup
Des       Register new user
Params    none
Access    Public
Method    POST  
*/
const SignUp = async (req, res) => {

    try {
        const UserData = SignUpSchema.parse(req.body);

        const existingUser = await prisma.User.findFirst({
            where: {
                OR: [
                    { Email: UserData.Email },
                    { Phone: UserData.Phone }
                ]
            }
        });

        if (existingUser) {
            return res.json({
                success: false,
                message: "User Email or Phone Already Exists."
            })
        }
        else {
            const hashedPassword = await bcrypt.hash(UserData.Password, 10);
            const newUser = await prisma.User.create({
                data: {
                    FirstName: UserData.FirstName,
                    LastName: UserData.LastName,
                    Email: UserData.Email,
                    Phone: UserData.Phone,
                    Password: hashedPassword,
                }
            })
            if (newUser) {
                res.status(201).json({
                    success: true,
                    message: "User has been successfully saved",
                    data: {
                        id: newUser.id,
                        name: newUser.FirstName,
                        email: newUser.Email,
                    }
                });
            }
            else {
                return res.status(500).json({
                    success: false,
                    message: "Some Error occurred while saving the user. Contact your administrator"
                });
            }
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
/*
Route     /signin
Des       Signin with email and password
Params    none
Access    Public
Method    POST  
*/
const SignIn = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        const UserData = SignInSchema.parse(req.body);
        const User = await prisma.User.findFirst({
            where: { Email: UserData.Email }
        });
        if (!User) {
            return res.status(401).json({
                success: false,
                message: "User Email Does not exist."
            });
        }
        const isPasswordValid = await bcrypt.compare(Password, User.Password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Incorrect Password"
            });
        }
        const token = generateJwtToken(User.id);

        return res.json({
            success: true,
            message: "User Login successfully",
            data: {
                User: {
                    Fullname: User.FirstName + " " + User.LastName,
                    Email: User.Email
                },
                "token": token
            }
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
/*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  
*/
const GoogleScope = passport.authenticate('google', { scope: ['profile', 'email'] })

/*
Route     /google/callback
Des       Google Signin Callback
Params    none
Access    Public
Method    GET  
*/
const GoogleCallback = passport.authenticate("google", { failureRedirect: "/" }, (req, res) => {
    //console.log(res);
    res.redirect('http://localhost:5173/');
});

// app.get('/profile', (req, res) => {
//     if (!req.isAuthenticated()) {
//       return res.redirect('/auth/google');
//     }
//     res.send(`Hello, ${req.user.name}`);
//   });

//   app.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/');
//   });


export { SignUp, SignIn, GoogleScope, GoogleCallback };

