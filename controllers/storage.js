const {storageModel} = require('../models');

const PUBLIC_URL = process.env.PUBLIC_URL;

// obteniendo lista
const getItems = async (req, res) => {
	// res.json({ msg: 'mandando respuesta' });
	const data = await storageModel.find({});

	res.send({data});
};

//obteniendo un detalle
const getItem = (req, res) => {};

//insertar un registro
const createItem = async (req, res) => {
	const {body, file} = req;
	console.log(file);
	const fileData = {
		filename: file.filename,
		url: `${PUBLIC_URL}/${file.filename}`,
	};
	const data = await storageModel.create(fileData);
	res.send({data});
};

//actualizar un registro
const updateItem = (req, res) => {};

//eliminar un registro
const deleteItem = (req, res) => {};

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
};
