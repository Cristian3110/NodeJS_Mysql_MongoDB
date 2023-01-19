const fs = require('fs');
const {matchedData} = require('express-validator');
const {storageModel} = require('../models');
const {handleHttpError} = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

// obteniendo lista
const getItems = async (req, res) => {
	try {
		const data = await storageModel.find({});
		res.send({data});
	} catch (err) {
		console.log(err);
		handleHttpError(res, 'ERROR_LIST_ITEMS');
	}
};

//obteniendo un detalle
const getItem = async (req, res) => {
	try {
		const {id} = matchedData(req);
		const data = await storageModel.findById(id);
		res.send({data});
	} catch (err) {
		console.log(err);
		handleHttpError(res, 'ERROR_GET_DETAIL_ITEM');
	}
};

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
const deleteItem = async (req, res) => {
	try {
		// req = matchedData(req);
		// const id = req.id;
		const {id} = matchedData(req);
		const findMedia = await storageModel.findById(id);
		const fileName = findMedia.filename;
		await storageModel.delete({_id: id});
		fs.unlinkSync(`${MEDIA_PATH}/${fileName}`);

		const data = {
			findMedia: fileName,
			deleted: true,
		};

		res.send({data});
	} catch (err) {
		console.log(err);
		handleHttpError(res, 'ERROR_DELETE_ITEMS');
	}
};

module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
};
