import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import userRoutes from "./routes/user.routes.js";


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));


app.use("/api/users", userRoutes);


app.get("/", (req,res) => {
    res.send("<h1>Portfolio backend is working</h1>");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({error: err.message});
});

export default app;