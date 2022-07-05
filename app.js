//. app.js
var express = require( 'express' ),
    app = express();

var url = 'URL' in process.env ? process.env.URL : null;
if( !url ){
  console.log( "Usage: $ URL=https://new.target.url/ node app" );
  process.exit( -1 );
}

app.all( '*', function( req, res ){
  /* POST メソッドを POST メソッドのままリダイレクトしたい場合は、こっちのコメントを外す
  var method = req.method;
  if( method == 'GET' || method == 'HEAD' ){
    //. https://developer.mozilla.org/ja/docs/Web/HTTP/Status/301
    res.status( 301 );
  }else{
    //. https://developer.mozilla.org/ja/docs/Web/HTTP/Status/308
    res.status( 308 );
  }
  */

  /* メソッドに関係なく、無条件に新しい URL へ GET で推移したい場合は、こっちのコメントを外す
  */
  res.status( 301 );

  //. 以下は共通
  res.set( 'Location', url );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
