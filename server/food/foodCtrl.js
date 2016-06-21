const Food = require( './Food' );

module.exports = {
	postFood( req, res ) {
		new Food( req.body ).save( ( err, newFood ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 201 ).json( newFood );
		} );
		// new Food( req.body ).save( function( err, newFood ) {
		//
		// } )
	},

	getFood( req, res ) {
		Food.find( {}, ( err, food ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( food );
		} );
	},

	getOneFood( req, res ) {
		Food.findById( req.params.id, ( err, food ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( food );
		} );
	},

	deleteOneFood( req, res ) {
		Food.findByIdAndRemove( req.params.id, ( err, deletedFood ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( deletedFood );
		} );
	},

	getFoodByCalories( req, res ) {
		// Food.find( { name: `Pizza` }, ( req, res ) =>
		Food.find()
			.where( `calories` ).gt( req.params.calories )
			// .limit( 2 )
			.sort( 'calories' )
			.exec()
			.then( ( food, err ) => {
				if ( err ) {
					return res.status( 500 ).send( err );
				}

				return res.status( 200 ).json( food );
			} );
	},

	updateFoodName( req, res ) {
		Food.findByIdAndUpdate( req.params.id, { name: req.body.name }, ( err, food ) => {
			if ( err ) {
				return res.status( 500 ).send( err );
			}

			return res.status( 200 ).json( food );
		} );
	}
};