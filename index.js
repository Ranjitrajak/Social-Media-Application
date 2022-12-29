import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

// Routes

const app = express();
dotenv.config()


// Middleware
const Database=process.env.DB_connection

app.use(bodyParser.json({  extended: true }));
app.use(bodyParser.urlencoded({  extended: true }));


mongoose.connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const PORT=4000

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));


  // usage of routes
  app.use('/auth', AuthRoute)
  app.use('/user', UserRoute)
  app.use('/post', PostRoute)
