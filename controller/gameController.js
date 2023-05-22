const Game = require("../models/gameModel");
const mongoose = require("mongoose");

//get all
const getGames = async (req, res) => {
  const games = await Game.find({}).sort({ createdAt: -1 });
  res.status(200).json(games);
};

//get one by id
const getGame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Game not found" });
  }

  const game = await Game.findById(id);

  if (!game) {
    return res.status(404).json({ error: `Game: ${id}, not found` });
  }

  res.status(200).json(game);
};
//get one by name
const getGameByName = async (req, res) => {
  const { title } = req.params;

  const game = await Game.findOne({ title: req.params.title });

  if (!game) {
    return res.status(404).json({ error: `Game: ${title}, not found` });
  }

  res.status(200).json(game);
};

//create new
const createGame = async (req, res) => {
  const { title, year, story, bosses } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!year) {
    emptyFields.push("Year");
  }
  if (!story) {
    emptyFields.push("Story");
  }
  if (!bosses) {
    emptyFields.push("Robot Masters");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  //add doc to db
  try {
    const game = await Game.create({
      title,
      year,
      story,
      bosses,
    });
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete one by id
const deleteGame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Game not found" });
  }

  const game = await Game.findOneAndDelete({ _id: id });

  if (!game) {
    return res.status(400).json({ error: `game: ${id}, not found` });
  }

  res.status(200).json(game);
};

//update one by id
const updateGame = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Game not found" });
  }

  const game = await Game.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!game) {
    return res.status(400).json({ error: `game: ${id}, not found` });
  }

  res.status(200).json(game);
};

module.exports = {
  createGame,
  getGame,
  getGameByName,
  getGames,
  deleteGame,
  updateGame,
};
