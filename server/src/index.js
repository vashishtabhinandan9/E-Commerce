import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import { router } from "./Routes/RouterMain.js";
const app = express();
app.use(express.json());

dotenv.config();

const allowedOrigins = [
    "https://e-commerce-kappa-fawn.vercel.app", // Production Frontend
    /\.vercel\.app$/, // Allows any Vercel subdomain
];

app.use((req, res, next) => {
    console.log("Incoming Request Origin:", req.headers.origin);
    next();
});

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.some((o) => origin.match(o))) {
                console.log(`✅ Allowed: ${origin}`);
                callback(null, true);
            } else {
                console.log(`⛔ Blocked by CORS: ${origin}`);
                callback(new Error("Not allowed by CORS"));
            }
        },
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
