const prisma = require("../db");

const findUser = async () => {
  const user = await prisma.user.findMany();
  return user;
};
const deleteUserById = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id: id, // Use the field defined in your schema
    },
  });
  return user;
};

const insertUser = async (userData) => {
  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      created: new Date(),
    },
  });
  return user;
};

const editUser = async (id, userData) => {
  const user = await prisma.user.update({
    where: { id: id },
    data: {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    },
  });
  return user;
};

module.exports = {
  findUser,
  deleteUserById,
  insertUser,
  editUser,
};
