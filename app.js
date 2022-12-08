require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const app = express();

//uso de cors
app.use(cors());

// convertiendo a JSON
app.use(express.json());

//sacando la info de la carpeta donde se almacena los files
app.use(express.static('storage'));

const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Invocando las rutas
app.use('/api', require('./routes'));

app.listen(port, () => {
	console.log(`App run port ${port}`);
});

dbConnect();
