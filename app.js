//. app.js
var express = require( 'express' ),
    app = express();

var url = 'URL' in process.env ? process.env.URL : null;
if( !url ){
  console.log( "Usage: $ URL=https://new.target.url/ node app" );
  process.exit( -1 );
}

app.all( '*', function( req, res ){
  res.status( 301 );
  res.set( 'Location', url );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
