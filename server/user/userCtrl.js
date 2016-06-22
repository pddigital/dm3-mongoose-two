const User = require( './User' );

module.exports = {
	postUser( req, res ) {
		new User( req.body ).save( ( err, user ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 201 ).json( user );
		} );
	},

	getUser( req, res ) {
		User.findById( req.params.id )
			.populate( `foodsCreated` )
			.exec( ( err, populatedUser ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				return res.status( 200 ).json( populatedUser );
			} );
	}
};