const express = require('express');
const {validatorGetItem} = require('../validators/storage');
const uploadMIddleware = require('../utils/handleStorage');
const {
	createItem,
	getItem,
	getItems,
	updateItem,
	deleteItem,
} = require('../controllers/storage');

const router = express.Router();
//TODO: localhost:3000/api/storage

// Create an Item
router.post('/', uploadMIddleware.single('myfile'), createItem);

//Get all the items
router.get('/', getItems);

//Get an Item
router.get('/:id', validatorGetItem, getItem);

//Delete an Item
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;
