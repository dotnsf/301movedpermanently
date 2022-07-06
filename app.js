//. app.js
var express = require( 'express' ),
    app = express();

var url = 'URL' in process.env ? process.env.URL : 'https://www.google.com/';
if( !url ){
  console.log( "Usage: $ URL=https://new.target.url/ node app" );
  process.exit( -1 );
}
var post_redirect = 'POST_REDIRECT' in process.env ? process.env.POST_REDIRECT : 0;

app.all( '*', function( req, res ){
  if( post_redirect ){
    var method = req.method;
    if( method == 'GET' || method == 'HEAD' ){
      //. https://developer.mozilla.org/ja/docs/Web/HTTP/Status/301
      res.status( 301 );
    }else{
      //. https://developer.mozilla.org/ja/docs/Web/HTTP/Status/308
      res.status( 308 );
    }
  }else{
    res.status( 301 );
  }

  res.set( 'Location', url );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
