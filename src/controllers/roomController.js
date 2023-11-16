const CRUDRoom = require("../service/CRUDRoom");

const getCRUDRoom = (req, res) => {
  return res.render("createRoom.ejs");
};

const postCRUDRoom = async (req, res) => {
  const message = await CRUDRoom.createRoom(req.body);
  console.log(message);
  return res.send("create room success");
};

module.exports = {
  getCRUDRoom: getCRUDRoom,
  postCRUDRoom: postCRUDRoom,
};
