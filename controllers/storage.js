const { storageModel } = require('../models');

// obteniendo lista
const getItems = async (req, res) => {
	// res.json({ msg: 'mandando respuesta' });
	const data = await storageModel.find({});

	res.send({ data });
};

//obteniendo un detalle
const getItem = (req, res) => {};

//insertar un registro
const createItem = async (req, res) => {
	const { body, file } = req;
	console.log(file);
	// const data = await storageModel.create(body);
	res.send({ file });
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
