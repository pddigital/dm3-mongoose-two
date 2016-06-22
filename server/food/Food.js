const mongoose = require( 'mongoose' );

const Review = mongoose.Schema( {
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: `User`,
		required: true
	},
	date: { type: Date, default: new Date() },
	stars: {
		type: Number,
		max: 5,
		min: 0,
		required: true
	},
	reviewContent: { type: String, required: true, maxLength: 140 }
} );

const Food = mongoose.Schema( {
	name: { type: String, required: true, unique: true },
	temp: Number,
	calories: Number,
	earlyBirdSpecial: { type: Boolean, default: false },
	reviews: [ Review ],
	chef: {
		type: mongoose.Schema.Types.ObjectId,
		ref: `User`,
		required: true
	}
} );
// lowercase - boolean
// uppercase - boolean
// trim - boolean
// min - number
// max - number
// minLength
// maxLength


module.exports = {
	Food: mongoose.model( `Food`, Food ),
	Review: mongoose.model( `Review`, Review )
};