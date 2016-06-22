const { Food, Review } = require( './Food' );
const User = require( '../user/User' );
// var Food = require( './Food' ).Food;
// var Review = require( './Food' ).Review;

module.exports = {
	postFood( req, res ) {
		new Food( req.body ).save( ( err, newFood ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			User.findById( req.params.id, ( err, user ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				user.foodsCreated.push( newFood._id );
				user.save( ( err, savedUser ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}

					return res.status( 201 ).json( newFood );
				} );
			} );

		} );
		// new Food( req.body ).save( function( err, newFood ) {
		//
		// } )
	},

	postReview( req, res ) {
		Food.findById( req.params.id, ( err, food ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			food.reviews.push( new Review( req.body ) );
			food.save( ( err, updatedFood ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				return res.status( 201 ).json( updatedFood );
			} );
		} );
	},

	deleteReview( req, res ) {
		Food.findById( req.params.foodId, ( err, food ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			food.reviews.id( req.params.reviewId, ( err, review ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				review.remove( ( err, deletedReview ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}

					return res.status( 200 ).json( deletedReview );
				} );
			} );
		} );
	},

	// getFood( req, res ) {
	// 	Food.find( {}, ( err, food ) => {
	// 		if ( err ) {
	// 			return res.status( 500 ).json( err );
	// 		}
	// 		console.log( food.reviews );
	// 		food[ 0 ].reviews.populate( `author` )
	// 			.exec( ( err, populatedFood ) => {
	// 				if ( err ) {
	// 					return res.status( 500 ).json( err );
	// 				}
	//
	// 				return res.status( 200 ).json( populatedFood );
	// 			} );
	// 	} );
	// },

	getOneFood( req, res ) {
		Food
			.findById( req.params.id )
			.populate( `chef` )
			.exec( ( err, populatedFood ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				return res.status( 200 ).json( populatedFood );
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

// 576ab9f258d1b53a7a505dac - ZachyBoy
// 576963955b3590de6ac3e4f8 - Food