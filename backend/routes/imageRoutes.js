const express = require('express');
const router = express.Router();
const { saveImage } = require('../controllers/imageController');

router.post('/saveImage', saveImage);

module.exports = router;
