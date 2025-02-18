import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import { router } from "./Routes/RouterMain.js";
const app = express();
app.use(express.json());

dotenv.config();
app.use(cors({
    origin: "*", // Allow requests from any origin
}));
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
