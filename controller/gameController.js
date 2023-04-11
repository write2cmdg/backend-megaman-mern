

const Game = require('../models/gameModel')
const mongoose = require('mongoose')


//get all
const getGames = async (req, res) => {
    
    const games = await Game.find({}).sort({ createdAt: -1 })
    res.status(200).json(games)
}

//get one by id
const getGame = async (req, res) => {

    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'game not found'})
    }

    const game = await Game.findById(id)

    if (!game) {

        return res.status(404).json({ error: `game: ${id}, not found` })
    }

    res.status(200).json(game)

}


//create new
const createGame = async (req, res) => {

    const { 
        name,
        HP,
        weapon,
        attack,
        weakness,
        game 
    } = req.body

    let emptyFields = []

    if (!name) {

        emptyFields.push('name')
    }
    if (!HP) {

        emptyFields.push('HP')
    }
    if (!weapon) {

        emptyFields.push('weapon')
    }
    if (!attack) {

        emptyFields.push('attack')
    }
    if (!weakness) {

        emptyFields.push('weakness')
    }
    if (!game) {

        emptyFields.push('game')
    }
    if (emptyFields.length > 0) {

        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }


    //add doc to db
    try {

        const game = await Game.create({     
            name,
            HP,
            weapon,
            attack,
            weakness,
            game  
        })
        res.status(200).json(game)

    } catch (error) {

        res.status(400).json({ error: error.message})

    }
}

//delete one by id
const deleteGame = async (req, res) => {

    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'game not found'})
    }

    const game = await Game.findOneAndDelete({_id: id})

    if (!game) {

        return res.status(400).json({ error: `game: ${id}, not found` })
    }

    res.status(200).json(game)

}




//update one by id
const updateGame = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'game not found'})
    }

    const game = await Game.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!game) {

        return res.status(400).json({ error: `game: ${id}, not found` })
    }

    res.status(200).json(game)
}


module.exports = {
    createGame,
    getGame,
    getGames,
    deleteGame,
    updateGame
}