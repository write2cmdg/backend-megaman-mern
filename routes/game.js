const express = require('express')
const {
    createGame,
    getGame,
    getGames,
    deleteGame,
    updateGame
} = require('../controller/gameController')
//const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

//router.use(requireAuth)//require auth for all paths

router.get('/allGames', getGames)

router.get('/oneGame/:id', getGame)

router.post('/createGame/', createGame)

router.delete('/deleteGame/:id', deleteGame)

router.put('/updateGame/:id', updateGame)



module.exports = router