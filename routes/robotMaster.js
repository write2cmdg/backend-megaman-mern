const express = require('express')
const {
    createRobotMaster,
    getRobotMaster,
    getRobotMasters,
    deleteRobotMaster,
    updateRobotMaster
} = require('../controller/robotMasterController')
//const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

//router.use(requireAuth)//require auth for all paths

router.get('/', getRobotMasters)

router.get('/:id', getRobotMaster)

router.post('/', createRobotMaster)

router.delete('/:id', deleteRobotMaster)

router.patch('/:id', updateRobotMaster)



module.exports = router