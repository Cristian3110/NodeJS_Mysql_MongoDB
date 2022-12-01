const express = require('express');
const router = express.Router();

//TODO: get, posst, delete, put de las canciones

router.get('/', (req, res) => {
	const data = ['hola', 'mundo'];
	res.send('Hola Mundo');

	res.send({ data });
});

module.exports = router;
