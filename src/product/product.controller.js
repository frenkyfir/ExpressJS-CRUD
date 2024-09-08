// untuk handle request , response , validasi body
// memanggil service.js

const express = require("express");
const prisma = require("../db");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  editProductById,
} = require("./product.service");

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id); //string
    const product = await getProductById(productId);
    res.send({
      data: product,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProductData = req.body;
    const product = await createProduct(newProductData);

    res.send({
      data: product,
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id; //req.params.id;
    await deleteProduct(parseInt(productId));
    res.send({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id; //string
    const newProductData = req.body;

    if (
      !newProductData.name ||
      !newProductData.description ||
      !newProductData.price ||
      !newProductData.image
    ) {
      return res.status(400).send({
        message: "Missing required fields",
      });
    }

    const product = await editProductById(parseInt(productId), newProductData);
    res.send({
      data: product,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id; //string
    const newProductData = req.body;

    const product = await editProductById(parseInt(productId), newProductData);
    res.send({
      data: product,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
