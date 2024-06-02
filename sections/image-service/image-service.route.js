const express = require('express');
const { convertImageController, compressImageController } = require('./image-service.controller');
const router = express.Router();

router.post('/convert' , convertImageController);
router.post('/compress' , compressImageController);
module.exports = router;