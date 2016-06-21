const mongoose = require( 'mongoose' );

const Food = mongoose.Schema( {
	name: { type: String, required: true, unique: true },
	temp: Number,
	calories: Number,
	earlyBirdSpecial: { type: Boolean, default: false },
	reviews: [ {
		reviewer: String,
		rating: Number,
		notes: {
			waiter: String,
			food: String
		}
	} ]
} );
// lowercase - boolean
// uppercase - boolean
// trim - boolean
// min - number
// max - number
// minLength
// maxLength

module.exports = mongoose.model( `Food`, Food );