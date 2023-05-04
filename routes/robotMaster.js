const express = require('express')
const {
    createRobotMaster,
    getRobotMaster,
    getRobotMasters,
    deleteRobotMaster,
    updateRobotMaster,
    getRobotMasterByName
} = require('../controller/robotMasterController')
//const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

//router.use(requireAuth)//require auth for all paths

router.get('/allBosses', getRobotMasters)

router.get('/oneBoss/:id', getRobotMaster)

router.get('/oneBossByName/:name', getRobotMasterByName)

router.post('/createBoss', createRobotMaster)

router.delete('/deleteBoss/:id', deleteRobotMaster)

router.put('/updateBoss/:id', updateRobotMaster)



module.exports = router
