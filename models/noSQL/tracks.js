const mongoose = require('mongoose');

const TracksScheme = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		album: {
			type: String,
		},
		cover: {
			type: String,
			validate: (req) => {
				return true;
			},
			message: 'ERROR_URL',
		},
		artist: {
			name: {
				type: String,
			},
			nickname: {
				type: String,
			},
			nationality: {
				type: String,
			},
		},
		duration: {
			start: {
				type: Number,
			},
		},
		mediaId: {
			type: mongoose.Types.ObjectId,
		},
	},
	{
		timestamps: true, //TODO: createdAT, updatedAt
		versionKey: false,
	}
);

module.exports = mongoose.model('tracks', TracksScheme);
