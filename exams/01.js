//01- Decarlare a vaiable name customerName at below

var customerName ;


//02- Convert below variable to boolean, if I make it empty it will log false
var imNotEmpty = 'Yep you are right';
if( imNotEmpty.length == 0){
    console.log('\n', false);
}else{
    console.log('\n', true);
}


//03- merge those array without using array.concat() method
function mergeArray(arr1,arr2){
    for( var i = 0; i < arr1.length; i++ ){
      arr2.push(arr1[i]);
    }
    return arr2;
    //return arr1.concat(arr2);
}
var mergeResult = mergeArray(['x','y','z'],[1,2,3]);
console.log(mergeResult);


//04- find the object from below data where name is Mizan
var people = [{name: 'Jm',age:2}, {name: 'Mm',age:23}, {name: 'An',age:25}, {name: 'Mizan',age:2}, {name: 'jeb',age:20}];
var obj = {};
for( var i = 0; i < people.length; i++){
    var item = people[i];
    if( item.name == 'Mizan'){
        obj = item;
    }
}
console.log('\n', obj);

//05- Set the variable customerName to Shantu which declared at question 01

 customerName = 'Shantu';


//06- write a function which will copy one object to another where first parameter will be destinationObject and second parameter will be sourceObject

function copy( destinationObject,sourceObject ){
  for( var key in sourceObject ){
     destinationObject[key] = sourceObject[key];
  }
}
var des = {name1 : 'x', age2 : 'y'};
var sou = {name : 'jim', age : 20, vill : 'comilla'};
copy(des,sou);
console.log('\nMerge result:',des);





