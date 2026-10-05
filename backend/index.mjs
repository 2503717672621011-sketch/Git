import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
dotenv.config()

const port = process.env.PORT
app.use(express.json())
app.get("/",(req,res)=>
{
    res.status(200).send(
        {
            status:true,
            msg:"Fine"
        });
})
app.listen(port,()=>
{
    console.log("Server started");
})