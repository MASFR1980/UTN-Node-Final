import express from "express";
import { connectDB } from "./config/mongo.js";
import { authRouter } from "./routes/authRouter.js";
import { userRouter } from "./routes/userRouter.js";
import { dataRouter } from "./routes/dataRouter.js";
import cors from "cors";


process.loadEnvFile()
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/auth", authRouter)

app.use("/api/user", userRouter)

app.use('/api/data', dataRouter);

app.listen(PORT, () => {
    connectDB()
    console.log(`Server on http://localhost:${PORT}`)
})

