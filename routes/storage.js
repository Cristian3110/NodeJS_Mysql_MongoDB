const express = require('express');
const uploadMIddleware = require('../utils/handleStorage');
const { createItem } = require('../controllers/storage');

const router = express.Router();
//TODO: localhost:3000/api/storage

router.post('/', uploadMIddleware.single('myfile'), createItem);

module.exports = router;
