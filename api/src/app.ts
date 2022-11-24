import "dotenv/config";
import  express  from "express";
import cors from "cors";
import morgan from "morgan";
import { authenticate } from "./middlewares/auth";
import { generateToken } from "./utils/jwt.handle";
import { authRouter } from "./routes/auth/auth.routes";

// consts 
const app = express()

// middlewares
app.use(express.json())
app.use(morgan("dev"))

app.use("/auth", authRouter)

// app.get("/", authenticate, (req, res)=>{
//     console.log(req.user)
//     res.send()
// })

// app.get("/login", (req, res)=>{
//     const token = generateToken({id:1, name:"name", email:"email", lastname:"lastname"})
//     res.send(token)
// })


export {app}


