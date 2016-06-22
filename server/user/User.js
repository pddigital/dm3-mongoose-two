const mongoose = require( 'mongoose' );

const User = mongoose.Schema( {
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true },
	foodsCreated: [
		{ type: mongoose.Schema.Types.ObjectId, ref: `Food` }
	]
} );

module.exports = mongoose.model( `User`, User );
