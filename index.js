import express from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users",userRoutes);

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
}
)
