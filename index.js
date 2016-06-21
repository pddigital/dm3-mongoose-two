const express = require( 'express' );
const { json } = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const masterRoutes = require( './server/masterRoutes' );

const app = express();
const port = 8080;
const mongoUri = `mongodb://localhost:27017/menu`;


mongoose.connect( mongoUri );
mongoose.connection.once( `open`, () => {
	console.log( `Connected to mongo at ${ mongoUri }` );
} );

app.use( json() );

masterRoutes( app );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );