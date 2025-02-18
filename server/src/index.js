import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./Routes/RouterMain.js";

const app = express();
dotenv.config();

// CORS configuration
app.use(
    cors({
        origin: "https://e-commerce-cl70tckjk-vashishtabhinandan9s-projects.vercel.app", // Replace with your frontend origin
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
    res.send({ message: "hello" });
});

// Handle preflight requests
app.options("*", cors());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({
        error: err,
        message: "Something Went Wrong",
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});