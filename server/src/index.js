import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import { router } from "./Routes/RouterMain.js";
const app = express();
app.use(express.json());

dotenv.config();
const allowedOrigins = [
    "https://e-commerce-kappa-fawn.vercel.app", // Production frontend
    "https://*.vercel.app", // Allow all Vercel subdomains
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.some((o) => origin.match(new RegExp(`^${o.replace(/\*/g, ".*")}$`)))) {
                callback(null, true);
            } else {
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
