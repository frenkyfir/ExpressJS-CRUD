const express = require("express");
const router = express.Router();

const {
  getUser,
  deleteUser,
  addUser,
  editPacthUser,
} = require("./user.service");

router.get("/", async (req, res) => {
  const user = await getUser();
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await deleteUser(id);
    res.send({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const userData = req.body;
  try {
    const user = await addUser(userData);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const userData = req.body;

  try {
    const user = await editPacthUser(id, userData);
    res.send({
      data: user,
      message: "edit success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const userData = req.body;

    if (!userData.name || !userData.password || !userData.email) {
      return res.status(401).send({
        message: "missing require fields",
      });
    }
    const user = await editPacthUser(id, userData);
    res.send({
      data: user,
      message: "edit success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
