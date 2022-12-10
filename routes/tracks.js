const express = require('express');
const custonHeader = require('../middleware/customHeader');
const { validatorCreateItem } = require('../validators/tracks');

const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require('../controllers/tracks');
const router = express.Router();

//TODO: get, posst, delete, put de las canciones

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', validatorCreateItem, custonHeader, createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
