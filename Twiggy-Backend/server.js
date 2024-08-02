import cors from "cors"
import 'dotenv/config'
import express from "express"
import { connectDB } from "./config/db.js"
import cartRouter from "./routes/cartroute.js"
import foodRouter from "./routes/foodroute.js"
import orderRouter from "./routes/orderroute.js"
import userRouter from "./routes/userroute.js"



// app config
const app = express()
const port = 4000;

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})