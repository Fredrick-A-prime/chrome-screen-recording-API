const express = require('express');
const router = express.Router();
const videoUpController = require('../controller/fileHandler');

router.post('/api/video-upload', videoUpController);

module.exports = router;