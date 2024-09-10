const {
  findUser,
  deleteUserById,
  insertUser,
  editUser,
} = require("./user.repository");

const getUser = async () => {
  const user = await findUser();
  return user;
};

const deleteUser = async (id) => {
  if (isNaN(id) || !Number.isInteger(parseFloat(id))) {
    throw new Error("ID must be an integer number");
  }
  const user = await deleteUserById(id);

  if (!user) {
    throw new Error("ID not found");
  }

  return user;
};

const addUser = async (userData) => {
  const user = await insertUser(userData);
  return user;
};

const editPacthUser = async (id, userData) => {
  const user = await editUser(id, userData);
  return user;
};

module.exports = {
  getUser,
  deleteUser,
  addUser,
  editPacthUser,
};
