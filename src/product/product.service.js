const {
  findProductById,
  findProducts,
  makeProduct,
  changeProductbyId,
  deleteProductById,
} = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await findProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

const createProduct = async (newProductData) => {
  if (
    !newProductData.name ||
    !newProductData.description ||
    !newProductData.price ||
    !newProductData.image
  ) {
    throw new Error("All fields must be filled");
  }
  const product = await makeProduct(newProductData);
  return product;
};

const deleteProduct = async (id) => {
  if (typeof id !== "number") {
    throw new Error("Id must be a number");
  }
  await getProductById(id);
  await deleteProductById(id);
};

const editProductById = async (id, productData) => {
  await getProductById(id);
  const product = await changeProductbyId(id, productData);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  editProductById,
};
