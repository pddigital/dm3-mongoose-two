const foodRoutes = require( './food/foodRoutes' );
const userRoutes = require( './user/userRoutes' );

module.exports = app => {
	foodRoutes( app );
	userRoutes( app );
};