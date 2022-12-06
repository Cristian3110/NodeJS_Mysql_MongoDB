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
const createItem = (req, res) => {};

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
