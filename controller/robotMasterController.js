

const RobotMaster = require('../models/robotMasterModel')
const mongoose = require('mongoose')


//get all
const getRobotMasters = async (req, res) => {
    
    const robotMasters = await RobotMaster.find({}).sort({ createdAt: -1 })
    res.status(200).json(robotMasters)
}

//get one by id
const getRobotMaster = async (req, res) => {

    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'robotMaster not found'})
    }

    const robotMaster = await RobotMaster.findById(id)

    if (!robotMaster) {

        return res.status(404).json({ error: `robotMaster: ${id}, not found` })
    }

    res.status(200).json(robotMaster)

}

//get one by name
const getRobotMasterByName = async (req, res) => {

    const { name } = req.params 

    const robotMaster = await RobotMaster.find({name: req.params.name})

    if (!robotMaster) {

        return res.status(404).json({ error: `robotMaster: ${id}, not found` })
    }

    res.status(200).json(robotMaster)

}


//create new
const createRobotMaster = async (req, res) => {

    const { 
        name,
        hp,
        weapon,
        attack,
        weakness,
        game 
    } = req.body

    let emptyFields = []

    if (!name) {

        emptyFields.push('name')
    }
    if (!hp) {

        emptyFields.push('hp')
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

        const robotMaster = await RobotMaster.create({     
            name,
            hp,
            weapon,
            attack,
            weakness,
            game  
        })
        res.status(200).json(robotMaster)

    } catch (error) {

        res.status(400).json({ error: error.message})

    }
}

//delete one by id
const deleteRobotMaster = async (req, res) => {

    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(404).json({ error: 'robotMaster not found'})
    }

    const robotMaster = await RobotMaster.findOneAndDelete({_id: id})

    if (!robotMaster) {

        return res.status(400).json({ error: `robotMaster: ${id}, not found` })
    }

    res.status(200).json(robotMaster)

}




//update one by id
const updateRobotMaster = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'robotMaster not found'})
    }

    const robotMaster = await RobotMaster.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!robotMaster) {

        return res.status(400).json({ error: `robotMaster: ${id}, not found` })
    }

    res.status(200).json(robotMaster)
}


module.exports = {
    createRobotMaster,
    getRobotMaster,
    getRobotMasterByName,
    getRobotMasters,
    deleteRobotMaster,
    updateRobotMaster
}