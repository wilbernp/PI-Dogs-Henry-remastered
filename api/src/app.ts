import  express  from "express";
import cors from "cors";
import morgan from "morgan";

import { apiRouter, authRouter, dashboardRouter, dashboardAuthRouter } from "./routes";
import { authenticate } from "./middlewares/authenticate.middleware";
import { authorization } from "./middlewares/authorization.middleware";

// consts 
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/auth", authRouter)
app.use("/api", apiRouter)
app.use("/dashboard/auth", dashboardAuthRouter)
app.use("/dashboard", authenticate, authorization, dashboardRouter)

export {app}


