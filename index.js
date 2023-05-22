const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const robotMasterRoutes = require("./routes/robotMaster");
const gameRoutes = require("./routes/game");
const userRoutes = require("./routes/user");
const cors = require("cors");
const path = require("path");

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

//Routes
app.use("/api", robotMasterRoutes);
app.use("/api", gameRoutes);
app.use("/api", userRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"), (err) => {
    if (err) res.status(500).send(err);
  });
});

// app.get('/*', function(req, res) {
// res.sendFile(path.join(__dirname, '/index.html'));
// });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
