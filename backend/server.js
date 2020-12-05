import express from "express";
import mongoose from "mongoose";
import config from "config";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

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

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});
app.use("/api/users", userRouter);

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("server is ready");
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
