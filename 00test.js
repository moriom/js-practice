/*functionName('dsfsdafsdf','dfsfdfdf');    // function can call before declaration.

function functionName(param1, param2){    //It can be use from everywhere.
    console.log('Im a function with name',param1, param2);
}
var anonymusFunction = function(param1){ //The variable which containing a anonymus function must be call after declaration
     console.log('Log:', param1);
}
*/


function bookTicket(callback){
    setTimeout(function(){
        console.log('printing ticket');
        callback();
    },5000)
}