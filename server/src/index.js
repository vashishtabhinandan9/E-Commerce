import express from "express"
import dotenv from "dotenv"
const app= express();
app.use(express.json());
dotenv.config();

app.use('/',indexRouter);

app.get('/',(req,res)=>{
    res.send( {"message":"hello"})
})


const port = 3000
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
})
