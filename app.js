require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const app = express();

app.use(cors());

app.use(express.json());

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
