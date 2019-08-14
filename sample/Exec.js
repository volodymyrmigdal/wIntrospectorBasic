
let _ = require( 'wroutinebasic' );

/* exec source code with context */

var src = 'return this.a + this.b';
var context =
{
  a : 1,
  b : 2
}
var result = _.exec
({
  code : src,
  context : context
});
console.log( result ); //3

/* exec source code with external vars */

var src = 'return a + b';
var externals =
{
  a : 1,
  b : 2
}
var result = _.exec
({
  code : src,
  externals : externals
});
console.log( result ); //3
