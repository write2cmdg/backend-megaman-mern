
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(


    {

        title: {
            type: String,
            unique: true,
            required: true
        },
        year: {
            type: String,
            unique: false,
            required: true
        },
        story: {
            type: String,
            unique: false,
            required: false
        },
        bosses: {
            type: String,
            unique: false,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const GameModel = mongoose.model("Game", gameSchema);

module.exports = GameModel;