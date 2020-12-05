import express from "express";
import mongoose from "mongoose";
import config from "config";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express();

const db = config.get("mongoURI");

mongoose
  .connect(db || "mongodb://localhost/amazona", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
