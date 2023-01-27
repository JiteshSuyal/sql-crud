const db = require("../db/db.index");
// const Op = db.Sequelize.Op;
const User = db.user;

const create = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // const userData = await User.findOne({
    //   email: email,
    // });
    // if (userData) {
    //   throw { message: "Already exists" };
    // }
    const createUser = await User.create({
      username: username,
      password: password,
      email: email,
    });
    console.log(createUser);
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: createUser,
    });
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

const read = async (req, res) => {
  try {
    const data = await User.findOne({ where: { id: 4 } }); //findAll for fetching all
    if (!data) {
      throw { message: "No user exists" };
    }
    return res.status(200).json({
      success: true,
      message: "All Users fetched successfully",
      data: data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ error: e });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, phone } = req.body;
    const updateUser = await User.findOneAndUpdate(
      { email: email },
      { name: name, username: username, email: email, phone: phone },
      { new: true }
    );
    if (!updateUser) {
      throw { message: "No user with this email id" };
    }
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updateUser,
    });
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

const del = async (req, res) => {
  try {
    const { email } = req.body;
    const delUser = await User.findOneAndDelete({ email: email });
    if (!delUser) {
      throw { message: "no user with the email" };
    }
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: delUser,
    });
  } catch (e) {
    return res.status(400).send({ error: e });
  }
};

module.exports = {
  create,
  read,
  update,
  del,
};
