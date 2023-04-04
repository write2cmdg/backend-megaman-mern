const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose')
const robotMasterRoutes = require('./routes/robotMaster')
const cors = require('cors')

//Middleware
app.use(express.json())
app.use(cors());


// // Set the 'Access-Control-Allow-Origin' header to allow requests from all domains
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000/');
//     next();
//   });

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