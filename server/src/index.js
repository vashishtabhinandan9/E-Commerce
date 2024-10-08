import express from "express"
import dotenv from "dotenv"
import session from 'express-session';
import passport from 'passport';
import './Helper/passport-setup.js'
import { router } from "./Routes/RouterMain.js";
const app = express();
app.use(express.json());

dotenv.config();
app.use(session({
    secret: 'your-session-secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.get('/', (req, res) => {
    res.send({ "message": "hello" })
})


app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        error: err,
        message: 'Something Went Wrong'
    });
})
const port = 3000
app.listen(port, () => {
    console.log(`app is listening at port ${port}`);
})
