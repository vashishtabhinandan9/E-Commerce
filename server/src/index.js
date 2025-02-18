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
    /\.vercel\.app$/, // Allows any Vercel subdomain
];

// ✅ CORS Middleware (MUST be First)
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.some((o) => typeof o === "string" ? o === origin : o.test(origin))) {
                console.log(`✅ Allowed Origin: ${origin}`);
                callback(null, true);
            } else {
                console.log(`⛔ Blocked by CORS: ${origin}`);
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

// ✅ Debug: Log Incoming Origin
app.use((req, res, next) => {
    console.log("🔍 Incoming Request Origin:", req.headers.origin || "No Origin Sent");
    next();
});
app.use((req, res, next) => {
    console.log("Full Request Headers:", req.headers);
    next();
});
// ✅ Manually Set CORS Headers (Fallback)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});

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
