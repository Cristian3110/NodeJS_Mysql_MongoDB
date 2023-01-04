// This custonHeader is a validator

const custonHeader = (req, res, next) => {
	// console.log(req.headers);
	try {
		const apikey = req.headers.api_key;
		if (apikey === 'cjcc3110') {
			next();
		} else {
			res.status(403);
			res.send({
				error: 'API_KEY no es correcta',
			});
		}
	} catch (err) {
		console.log(err);
		res.status(403);
		res.send({error: 'ALGO OCURRIÓ EN EL CUSTOM HEADER'});
	}
};

module.exports = custonHeader;
