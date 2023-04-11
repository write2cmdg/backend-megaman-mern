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

router.get('/allBosses', getRobotMasters)

router.get('/oneBoss/:id', getRobotMaster)

router.post('/createBoss', createRobotMaster)

router.delete('/deleteBoss/:id', deleteRobotMaster)

router.put('/updateBoss/:id', updateRobotMaster)



module.exports = router