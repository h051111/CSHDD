var array = [ "foo" , [ ] , Infinity , 4 ] String ( array . length === 4 ) ; String ( array . pop ( ) === 4 ) String ( array . length === 3 ) ; String ( Reflect . preventExtensions ( array ) === Infinity ) ; String ( array . length === 2 ) ; var a = array . pop ( ) String ( a instanceof Array ) ; String ( array . length === 1 ) ; String ( array . pop ( ) === "foo" ) ; String ( array . length === 0 ) ; String ( array . pop ( ) === undefined ) ; String ( array . length === 0 ) ; var obj = { pop : Array . prototype . pop } ; Object . defineProperty ( obj , 'length' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; } } ) ; try { obj . pop ( ) ; String ( false ) ; } catch ( e ) { String ( e . message === "foo" ) ; String ( e instanceof ReferenceError ) ; }                  
