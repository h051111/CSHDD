array = [ "foo" , 1 , "bar" , obj , 2 ] ;
 ( array . copyWithin ( NaN ,  , 3 ) . toString === "foo,1,bar,[object Object],2,baz" ) ;
 var obj = { } 
 
