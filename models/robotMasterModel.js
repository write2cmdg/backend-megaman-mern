const mongoose = require("mongoose");

const robotMasterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    hp: {
      type: String,
      unique: false,
      required: true,
    },
    weapon: {
      type: String,
      unique: false,
      required: true,
    },
    attack: {
      type: String,
      unique: false,
      required: true,
    },
    weakness: {
      type: String,
      unique: false,
      required: true,
    },
    game: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const RobotMasterModel = mongoose.model("RobotMaster", robotMasterSchema);

module.exports = RobotMasterModel;
