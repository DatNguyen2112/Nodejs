const db = require("../models/index");
const CRUDuser = require("../service/CRUDuser");
const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

const getCRUD = (req, res) => {
  return res.render("login.ejs");
};

const postCRUD = async (req, res) => {
  const message = await CRUDuser.createUser(req.body);
  console.log(message);
  return res.send("sign in success");
};

const getListUser = async (req, res) => {
  const data = await CRUDuser.getUser();
  return res.render("listUser.ejs", {
    dataTable: data,
  });
};

const getUserInfo = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const userInfo = await CRUDuser.getUserById(userId);
    return res.render("userInfo.ejs", {
      user: userInfo,
    });
  } else {
    return res.send("User not found");
  }
};

const updateUserInfo = async (req, res) => {
  const userData = req.body;
  const listUsers = await CRUDuser.updateUser(userData);
  return res.render("listUser.ejs", {
    dataTable: listUsers,
  });
};

const deleteCRUD = async (req, res) => {
  const id = req.query.id;
  if (id) {
    await CRUDuser.deleteUser(id);
    return res.send("Delete success");
  } else {
    return res.send("Faild");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  getListUser: getListUser,
  getUserInfo: getUserInfo,
  updateUserInfo: updateUserInfo,
  deleteCRUD: deleteCRUD,
};
