import  express  from "express";
import cors from "cors";
import morgan from "morgan";

import { apiRouter } from "./routes/api/index.routes";
import { authRouter } from "./routes/auth/auth.routes";




// consts 
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use("/auth", authRouter)
app.use("/api", apiRouter)

export {app}


