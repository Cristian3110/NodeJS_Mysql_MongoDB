const express = require('express');
const custonHeader = require('../middleware/customHeader');
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');

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

router.get('/:id', validatorGetItem, getItem);

// router.post('/', validatorCreateItem, custonHeader, createItem);
router.post('/', validatorCreateItem, createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

module.exports = router;
