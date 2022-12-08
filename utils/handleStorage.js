const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const pathStorage = `${__dirname}/../storage`;
		cb(null, pathStorage);
	},
	filename: function (req, file, cb) {
		//todo: mi-cv.pdf ó mivideo.mp4
		const ext = file.originalname.split('.').pop(); // TODO: [mi,cv,pdf]
		const filename = `file-${Date.now()}.${ext}`;
		cb(null, filename);
	},
});

const uploadMIddleware = multer({ storage });

module.exports = uploadMIddleware;
