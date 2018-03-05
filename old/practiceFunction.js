// function doSum( a,b ){
//     return  a+b;
// }
// function doSubtraction( x,y ){
//     return  x-y;
// }
// var math = {sum: doSum, sub: doSubtraction};


// function sum(a, b){
//     return a + b;
// }
// var sumB = function(a,b){
//     return a + b;
// };

// var obj = {play:4, 
//     do: 'Im doing', 
// isDoing:true, 
// start: function(value){
//     console.log('starting ',value);
//     return 'done'
// }
    
// };
// obj.start('ja mon chai')


function divided(a,b){ // types of function declaration
    return a/b;
}
    var calculator = {
         sum : function ( a,b ){
            return a+b;
        },
        
        mutliplyer : function ( x,z ){
            return x*z;
        },
        
        print : function (A){

            // hazar kaaj korlaam

            console.log("\nResult ",A);
        },
        
        div : divided

    };

    calculator.sub = function(a,b){

        return a-b;
    };
// calculator.print(calculator.div( 32,8 ))

    console.log(calculator.sub(5,2));