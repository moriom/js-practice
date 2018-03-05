//>>>>>> array.indexOf(value);  kon value koto no index e ache eta jana jabe.
//we initialize array in two way
var array11 = []; //Literral way
var array22 = new Array(); //Constuctor way

/* var people = [{name:'Anna', age: 22},{name: 'Jim', age: 23}];
people.push({name: 'Mizan', age: 24}); //3rd item push in array

var eligablePeople = [];

for( var i = 0; i < people.length; i++){   // loop in array
    var person = people[i];

    if( person.age % 2 == 0){
        eligablePeople.push( { name : person.name, age : person.age, isgEligble : true } ) 

    } else{
        eligablePeople.push( { name : person.name, age : person.age, isgEligble : false } )
    }


}

console.log("\nEligable Person are:",eligablePeople)  */
// var result = null;
// for(var i = 0;i < array.length;i++){
//     var currentPerson = array[i];
//     if(currentPerson.name == 'Jim')
//     {
//         result = currentPerson;
//         break;
//     }
// }

// console.log('got result ',result);

// var res = array.find(function(item){
//   return item.name == "Jim"  
// });

// console.log(res)

// for(var i = 0; i < array.length; i ++){
//     var person = array[i];
//     if(person.age % 2 == 0){
//         console.log("\nCancelling loop for", person.name);
//         continue;
//     }

//     console.log("\nI'm odd ",person.name);
// }



// write a function name printArry which will take an array of integers and will print each item with prefix even and odd 
 function printArray ( a ){
    for( var i = 0; i<a.length; i++){
     var item = a[i];
     if( item % 2 == 0 ){
        console.log("\n even :", item)
       }
       else{
           console.log('\n odd :', item)
       }
    }
}
printArray([2,5,8,7,9,23]) ;  
 


/* write a function name pick which will take two parameters like first one will be an object and second one
 will be an array,it will return a new object with value where those keys will contain at the array. */
function pick( obj,arr ){
     var newObj = {};
     for( var i = 0; i<arr.length; i++){
         var key = arr[i];
        if(obj[key] == undefined){
         continue;
        }
 newObj[key] = obj[key];
    }
 return newObj;
}

var result = pick({anna:200,jim:120, mizan:300},['jim','mizan','jashim'])
console.log(result);



// Write a function name sum of integer, which will take array of integer and will return sum of all itemes of that array.
function sum( arr ){
     var x = 0;
    for( var i = 0; i<arr.length; i++ ){
    var k = arr[i];
        if( typeof k == "string"){
 k = parseInt( k );
    }
 x+= k;
        }
 return x;
}

var Total = sum([1,2,'3',6,9]);
console.log('\n',Total );



// Write function name max which will take arry of integer and will return big number of that array.
function max( arr ){
    var x = 0;
    for( var i = 0; i<arr.length; i++){
     var item = arr[i];
         if( x < item){
         x = item;
        }
    }
 return x;
}

var Result = max( [9,4,5,1] );
console.log('\n Big Value :', Result);


