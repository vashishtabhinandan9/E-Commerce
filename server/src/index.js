import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import { router } from "./Routes/RouterMain.js";
const app = express();
app.use(express.json());

dotenv.config();
const allowedOrigins = [
    "https://e-commerce-2zit19h5y-vashishtabhinandan9s-projects.vercel.app",
    "https://e-commerce-bnqkq27vl-vashishtabhinandan9s-projects.vercel.app/",
    "https://e-commerce-b0zpstgk5-vashishtabhinandan9s-projects.vercel.app", // Example frontend URL
    "https://e-commerce-cl70tckjk-vashishtabhinandan9s-projects.vercel.app", // Another example frontend URL
    "http://localhost:3000", // For local development
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true); // Allow the request
            } else {
                callback(new Error("Not allowed by CORS")); // Block the request
            }
        },
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

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
