const express = require('express');
const uploadMIddleware = require('../utils/handleStorage');

const router = express.Router();
//TODO: localhost:3000/api/storage

router.post('/', uploadMIddleware.single('myfile'), (req, res) => {
	res.send({
		a: 1,
	});
});

module.exports = router;
