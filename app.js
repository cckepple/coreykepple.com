const express = require( 'express' );
// const bodyParser = require( 'body-parser' );
const path = require('path');
const http = require( 'http' );

const app = express();

// app.use( bodyParser.json() );


// Serve static files from the React app
console.log(path.join(__dirname, '/build'));
app.use('/static', express.static(path.join(__dirname, '/build')));

app.get( '/', async ( req, res ) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

http.createServer( app ).listen( 80 );
