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

router.get('/game', getGames)

router.get('/game/:id', getGame)

router.post('/game/', createGame)

router.delete('/game/:id', deleteGame)

router.put('/game/:id', updateGame)



module.exports = router