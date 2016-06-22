const foodCtrl = require( './foodCtrl' );

module.exports = app => {
	app.post( `/api/food/:id`, foodCtrl.postFood );
	app.post( `/api/reviews/:id`, foodCtrl.postReview );
	// app.get( `/api/food`, foodCtrl.getFood );
	app.get( `/api/food/:id`, foodCtrl.getOneFood );
	app.get( `/api/calories/:calories`, foodCtrl.getFoodByCalories );
	app.delete( `/api/food/:id`, foodCtrl.deleteOneFood );
	app.put( `/api/food/:id`, foodCtrl.updateFoodName );
};

// module.exports = function( app ) {
// 	app.post( /* .... */ );
// };