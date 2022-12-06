const { tracksModel } = require('../models');

// obteniendo lista
const getItems = async (req, res) => {
	// res.json({ msg: 'mandando respuesta' });
	const data = await tracksModel.find({});

	res.send({ data });
};

//obteniendo un detalle
const getItem = (req, res) => {};

//insertar un registro
const createItem = async (req, res) => {
	const { body } = req;
	console.log(body);
	const data = await tracksModel.create(body);
	res.send({ data });
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
