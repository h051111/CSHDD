var alpha = [ 'a' , 'b' , 'c' ] ; var numeric = [ 1 , 2 , 3 ] ; var alphaNumeric = alpha . concat ( numeric ) ; print ( JSON . stringify ( alphaNumeric ) === '["a","b","c",1,2,3]' ) ; print ( alphaNumeric . length === 6 ) ; numeric [ Symbol . isConcatSpreadable ] = false ; alphaNumeric = alpha . concat ( numeric ) ; print ( JSON . stringify ( alphaNumeric ) === '["a","b","c",[1,2,3]]' ) ; print ( alphaNumeric . length === 4 ) ; numeric [ Symbol . isConcatSpreadable ] = true ; var fakeArray = { [ Symbol . isConcatSpreadable ] : true , length : 2 , 0 : 4 , 1 : 5 } var numericArray = numeric . concat ( fakeArray ) ; print ( JSON . stringify ( numericArray ) === '[1,2,3,4,5]' ) ; print ( numericArray . length === 5 ) ; fakeArray [ Symbol . isConcatSpreadable ] = 2.756 ; numericArray = numeric . concat ( fakeArray ) ; print ( JSON . stringify ( numericArray ) === '[1,2,3,{"0":4,"1":5,"length":2}]' ) ; print ( numericArray . length === 4 ) ; var obj = { 0 : 'd' } ; var alphaObj = alpha . concat ( obj ) ; print ( JSON . stringify ( alphaObj ) === '["a","b","c",{"0":"d"}]' ) ; print ( alphaObj . length === 4 ) ; obj [ Symbol . isConcatSpreadable ] = true ; alphaObj = alpha . concat ( obj ) ; print ( JSON . stringify ( alphaObj ) === '["a","b","c"]' ) ; print ( alphaObj . length === 3 ) ; var bool = true ; var numericBool = numeric . concat ( bool ) ; print ( JSON . stringify ( numericBool ) === '[1,2,3,true]' ) ; print ( numericBool . length === 4 ) ; bool [ Symbol . isConcatSpreadable ] = false ; numericBool = numeric . concat ( bool ) ; print ( JSON . stringify ( numericBool ) === '[1,2,3,true]' ) ; print ( numericBool . length === 4 ) ; var id_0 = [ ] ; var id_1 = [ ] ; Object . defineProperty ( id_2 , '0' , { 'get' : function ( ) { throw new ReferenceError ( "foo" ) ; } } ) ; try { id_3 . concat ( id_4 ) ; print ( false ) ; } catch ( e ) { print ( e . message === "foo" ) ; print ( e instanceof ReferenceError ) ; }  