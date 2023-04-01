const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose')
const robotMasterRoutes = require('./routes/robotMaster')

//Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use(('/api/robotMaster', robotMasterRoutes))


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Connected to DB and listening on port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})