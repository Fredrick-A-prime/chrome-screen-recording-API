const express = require('express'); 
const videoRouter = require('./routes/videoUpRouter');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(videoRouter)

module.exports = app;