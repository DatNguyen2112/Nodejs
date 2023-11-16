const db = require("../models/index");

const createRoom = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Rooms.create({
        roomName: data.roomName,
        description: data.description,
      });

      resolve("New rooms is create success");
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createRoom: createRoom,
};
