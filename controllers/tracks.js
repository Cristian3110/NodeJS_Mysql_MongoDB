const {matchedData} = require('express-validator'); //
const {tracksModel} = require('../models');
const {handleHttpError} = require('../utils/handleError');

// obteniendo lista
const getItems = async (req, res) => {
	// res.json({ msg: 'mandando respuesta' });
	try {
		const data = await tracksModel.find({});

		res.send({data});
	} catch (err) {
		console.log(err);
		handleHttpError(res, 'ERROR EN GET ITEMS');
	}
};

//obteniendo un detalle
const getItem = async (req, res) => {
	try {
		req = matchedData(req);
		const {id} = req;
		const data = await tracksModel.findById(id);
		res.send({data});
		console.log(data);
	} catch (err) {
		handleHttpError(res, 'ERROR EN GET ITEM');
	}
};

//insertar un registro
const createItem = async (req, res) => {
	try {
		// const { body } = req;
		const body = matchedData(req); //*with matchedData(req) we can map the data and out the element unnecessary

		// console.log(body);
		const data = await tracksModel.create(body);
		res.send({data});
	} catch (err) {
		console.log(err);
		handleHttpError(res, 'ERROR EN CREATE ITEMS');
	}
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
