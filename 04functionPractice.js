
//  declaring function at different ways

functionName('dsfsdafsdf','dfsfdfdf');    // function can call before declaration.

function functionName(param1, param2){    //It can be use from everywhere.
    console.log('Im a function with name',param1, param2);
}
var anonymusFunction = function(param1){ //The variable which containing a anonymus function must be call after declaration
     console.log('Log:', param1);
}

//anonymusFunction('sdfasdfsdffasdf');

var arrowFunction = (param1, param2)=>{
     console.log(" Its a arrow function",param1, param2);
};

//arrowFunction('Yahoo!','not yahoo company');

var calculator = { // decalaring function inside object
  sum: function(firstValue, secondValue){
      return firstValue + secondValue;
  }, 
  subtract: function(firstValue, secondValue){
      return firstValue - secondValue;
  },
  logger: anonymusFunction
};
// console.log(calculator.sum(5,9)); //alternative invocation calculator["sum"](5,9)
// console.log(calculator.subtract(9,2)); //alternative invocation calculator["subtract"](9,2)
//calculator.logger('Im using reference of anonymus');



var arrayOfFunctions = [function(a,b){
    var result = 'Sum of a and b :'+ (a + b); 
    return result;
},{name: 'Jim', fan: 'Joilla', go:'Geche'}];

// console.log(arrayOfFunctions[0](2,3));
// console.log(arrayOfFunctions[1]['fan'], arrayOfFunctions[1].go);

function outerFunction(pocketMoney){
    
    var innerFunction = function(moreMoney){
        return pocketMoney + moreMoney;
    };
    
    return innerFunction;
}

var firstResult = outerFunction(20);
var totalMoney = firstResult(10);
//console.log('totalMoney',totalMoney);

// Todo: setInterval, setTimeout
function printTime(){
    console.log(new Date());
}
//printTime();
//setInterval(printTime, 1000);
function boom(){
    console.log('bommmmmm!!!!');
}

//boom();
//setTimeout(boom,5000);

function cook1(callback){
    console.log('Washing vegitable...');
    console.log('Cut the vegitable');
    console.log('Throw things at pot...');
    callback();
    console.log('Give Moshla...');
    console.log('Take down from chula');
}

function bailAndBath(){
    console.log('Ring....Ring...!!!');
    console.log('Go to the bath');
}

// cook1(bailAndBath);

function liveCook(callback){
    setTimeout(function(){
        console.log('Cook completed!');
        callback();
    },1000)
}
function serve1(){
        console.log('Serve');
    }
function orderBurger(){
    console.log('Choose burger');
    console.log('Give bill');
    liveCook(serve1);
    console.log('Order completed')
}
orderBurger();


// Problems :
// write a function name printObject which will take an object and will print each key and value.
function printObj(obj){
    for( var key in obj){
            console.log('\n',key,':',obj[key])
         }
    }
// printObj({ Name : "jim", houseName : 'Karola' }) 



// write function name rangeSum which will take two integer start & end then return sum of start & end.
function rangeSum( start, end ){
    var result = 0;
    for( var i = start; i <= end; i++){
     result = i + result;
     }
     return result;
 }
// console.log('\n',rangeSum(1,5)); 


// write a fuction name copy which will take two object parameters like destinationObject and sourceObject,
// the fuction will copy everthings from source to destination. 
function copy(destinationObject,sourceObject){
    for(var key in sourceObject){
        destinationObject[key] = sourceObject[key] ;
    }
}
var des = { name :'jim'};
var sou = { age :23, name1 :'Anna' };

copy(des,sou);
//console.log('\n',des);


// write a function name bookTicket which will take callback function where the function will log ticket booking
//and after 5 seconds the callback will be exeute where callback will print 'printing ticket'
function bookTicket(callback){
    console.log('Ticket booking');
    setTimeout(function(){
        callback();
    },5000)
}


function printTicket(){
    console.log('printing ticket');
}

bookTicket(printTicket);







