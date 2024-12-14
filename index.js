import express from "express";
import connectDb from "./config/Database.js";
import cookieParser from "cookie-parser";
import router from "./routes/userRoutes.js";
import tweetRouter from "./routes/tweetRoute.js";
import cors from "cors";
connectDb();
const app = express();
const PORT = 3000;
//middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
//api
app.use("/api/v1/user", router);
app.use("/api/v1/user/tweet", tweetRouter);

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "coming from backend",
  });
});

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
