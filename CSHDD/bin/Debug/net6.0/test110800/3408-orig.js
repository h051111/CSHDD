var obj = { } ;
 var array = [ "foo" , 1 , "bar" , obj , 2 , "baz" ] ;
 String ( array . copyWithin ( 2 , 0 , 6 ) . toString ( ) === "foo,1,foo,1,bar,[object Object]" ) ;
 String ( array . copyWithin ( 0 , 1 , 3 ) . toString ( ) === "1,foo,foo,1,bar,[object Object]" ) ;
 String ( array . copyWithin ( 3 , 0 , 4 ) . toString ( ) === "1,foo,foo,1,foo,foo" ) ;
 var array = [ "foo" , 1 , "bar" , obj , 2 , "baz" ] ;
 String ( array . copyWithin ( ) . toString ( ) === "foo,1,bar,[object Object],2,baz" ) ;
 String ( array . copyWithin ( 2 ) . toString ( ) === "foo,1,foo,1,bar,[object Object]" ) ;
 String ( array . copyWithin ( 1 , 4 ) . toString ( ) === "foo,bar,[object Object],1,bar,[object Object]" ) ;
 var array = [ "foo" , 1 , "bar" , obj , 2 , "baz" ] ;
 String ( array . copyWithin ( 12 , 3 , - 3 ) . toString ( ) === "foo,1,bar,[object Object],2,baz" ) ;
 String ( array . copyWithin ( - 2 , - 4 , 3 ) . toString ( ) === "foo,1,bar,[object Object],bar,baz" ) ;
 String ( array . copyWithin ( 1 , - 5 , 30 ) . toString ( ) === "foo,1,bar,[object Object],bar,baz" ) ;
 var array = [ "foo" , 1 , "bar" , obj , 2 , "baz" ] ;
 String ( array . copyWithin ( undefined ) . toString ( ) === "foo,1,bar,[object Object],2,baz" ) ;
 String ( array . copyWithin ( 2 , NaN ) . toString ( ) === "foo,1,foo,1,bar,[object Object]" ) ;
 String ( array . copyWithin ( 2 , undefined , 5 ) . toString ( ) === "foo,1,foo,1,foo,1" ) ;
 var array = [ "foo" , 1 , "bar" , obj , 2 , "baz" ] ;
 String ( array . copyWithin ( Infinity , 2 , NaN ) . toString ( ) === "foo,1,bar,[object Object],2,baz" ) ;
 String ( array . copyWithin ( Infinity , - Infinity , 4 ) . toString ( ) === "foo,1,bar,[object Object],2,baz" ) ;
 String ( array . copyWithin ( NaN , 67 , 3 ) . toString ( ) === "foo,1,bar,[object Object],2,baz" ) ;
 var obj = { copyWithin : Array . prototype . copyWithin } ;
 obj . copyWithin ( ) ;
 String ( obj . length === undefined ) ;
 var obj = { copyWithin : Array . prototype . copyWithin } ;
 Object . defineProperty ( obj , 'length' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ;
 } } ) ;
 try { obj . copyWithin ( 1 ) ;
 String ( false )
 } catch ( e ) { String ( e . message === "foo" ) ;
 String ( e instanceof ReferenceError ) ;
 }
 var obj = { copyWithin : Array . prototype . copyWithin , length : 5 } ;
  try { obj . copyWithin ( 2 ) ;
 String ( false ) ;
 } catch ( e ) { String ( e . message === "foo" ) ;
 String ( e instanceof ReferenceError ) ;
 }
 var obj = { '0' : 2 , '2' : "foo" , length : 3 , copyWithin : Array . prototype . copyWithin } ;
 obj . copyWithin ( 1 ) ;
 String ( obj [ 0 ] === 2 ) ;
 String ( obj [ 1 ] === 2 ) ;
 
 