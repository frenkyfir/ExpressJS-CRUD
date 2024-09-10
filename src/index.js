const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("aa World!");
});

const productController = require("./product/product.controller");
const userController = require("./user/user.controller");

app.use("/products", productController);
app.use("/users", userController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
