import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./Routes/RouterMain.js";

dotenv.config();
const app = express();
app.use(express.json());

// ✅ Allowed Origins (Regex pattern for Vercel subdomains)
const allowedOrigins = [
    "https://e-commerce-kappa-fawn.vercel.app", // Production Frontend
    process.env.FrontendURL,
    "http://localhost:5173/",
    "*",
    /\.vercel\.app$/, // Allows any Vercel subdomain
];

// ✅ CORS Middleware (MUST be First)
app.use(cors({
    origin: "*", // Allow requests from any origin
}));



// ✅ Routes
app.use('/', router);

// ✅ Test Route
app.get('/', (req, res) => {
    res.send({ "message": "hello" });
});

// ✅ Error Handler Middleware
app.use((err, req, res, next) => {
    console.error('❌ Error:', err);
    res.status(500).json({
        error: err.message || "Internal Server Error",
        message: "Something Went Wrong"
    });
});

// ✅ Start Server
const port = 3000;
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
