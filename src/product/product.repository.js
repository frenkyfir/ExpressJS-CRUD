// berhubungan dengan database
const prisma = require("../db");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const findProductById = async (id) => {
  const product = await prisma.findUnique({
    where: {
      id: id,
    },
  });

  return product;
};

const makeProduct = async (newProductData) => {
  const product = await prisma.product.create({
    data: {
      name: newProductData.name,
      description: newProductData.description,
      price: newProductData.price,
      image: newProductData.image,
    },
  });
  return product;
};

const changeProductbyId = async (id, productData) => {
  const product = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name: productData.name,
      description: productData.description,
      price: productData.price,
      image: productData.image,
    },
  });
  return product;
};

const deleteProductById = async (id) => {
  await prisma.delete({
    where: {
      id: id,
    },
  });

  return;
};

module.exports = {
  findProducts,
  findProductById,
  makeProduct,
  changeProductbyId,
  deleteProductById,
};
