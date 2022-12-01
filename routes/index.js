const fs = require('fs');
const express = require('express');
const router = express.Router();

const PATH_ROUTES = `${__dirname}`;

const removeExtension = (fileName) => {
	//todo: tracks.js = [tracks, js]
	return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
	const name = removeExtension(file); //todo: index, tracks

	if (name !== 'index') {
		console.log(`cargando ruta ${name}`);
		router.use(`/${name}`, require(`./${file}`)); //TODO: http://localhost:3000/api/tracks
	}
});
// console.log({ a });

module.exports = router;
