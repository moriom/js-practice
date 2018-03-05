
//we can initialze object two in javascipt
var obj11 = {}; //Liternal way
var obj22 = new Object(); // Constructor way

// object declaration : { key + 'value' (key all time string and integer value chara sob value ' or " cotation diye likhte hbe };
    var obj = { name : 'jim', flat : 'B1', members : 7 }; // here obj is a Object


var home = {name: 'Mizan', age: 22};
var key = 'name';

//get a keys value from object :

console.log(home.name); //first getter way if property is known to us
console.log(home['name']); //second way to get value 
console.log(home[key]); //Alternative of second way to get value if property is not known to us


//setting a keys value object :

home.name = "Mizan 2";
console.log(home.name); // first way to set value to key if property is known to us

home['name'] = "Mizan 3"; //second way to get value 
home[key] = "Mizan 4" //Alternative of second way to set value if property is not known to us


// getting value which is not exist at object :

var result  = home["jamonchai"];
console.log("*************", result);

// var customerName;
// customerName = "Annnnnnnnnna";


var pachMeshali = {
    numbers: [2,3,4,7,6],
    person: {name: 'Mizan', age:22},
    isBad:true,
    sleep:function(){
        console.log('Im sleeping...');
    }
};

//console.log(pachMeshali.numbers[3]); //pachMeshali.numbers.indexOf(7)

//console.log(pachMeshali.person.age);

//pachMeshali.isBad = false;

//pachMeshali.sleep();



// write a function name reverseObject which will take an object and will return another object where key will be value and value will be key.
function reverseObject(obj){
     var anotherObj = {}
     for( var key in obj){
        var value = obj[key];
    anotherObj[value] = key;
    }
 return anotherObj;
}

var x = { house : 'Mashfika', road : 28};
var result = reverseObject(x);

console.log('\n',result);



// write two functions name set and get which will share same store where set function will take two parameters like key and value.
// And get function will take key parameter which will return value regarding the key.
    var store = {};
function set( key, value ){
    store[key] = value;
}

function get(key){
    return store[key];
}
set('name','Mizan');
console.log(get('name'))



// Write a function name omit which will take two parameters,first one will be object and second one will be keys of array.
// The function will ignore keys in array and will return with a anotherObject.
function omit( obj,arr ){
    var result = {};
    for( var key in obj ){
        if( arr.indexOf( key ) == -1){
    result[ key ] = obj[ key ];
        }
    }

    console.log( result ); // inner log
        return result;    
}
var R = omit({ name : 'jim',age : 23, flat : 'B1' }, [ 'name','age' ]);
//console.log('\n',R); // outer log













