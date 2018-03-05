//variable declaration : 3 types

var a = 10; //integer vaiable
var b = "ame b variable"; // string variable
var isJim = true; // boolean variable
console.log(a, b, isJim); // Logging/debuging things




// function :


function sentenceMaker( array1 ) {

var sum = "";
for( var i = 0; i<array1.length; i++ ){

    if( sum==""){

        sum = sum +array1[i];

    }else{
        sum = sum +" "+ array1[i];

    }
}
//console.log( sum );

return sum;
}
sentenceMaker(["alu","vorta","khaba"])

var x = sentenceMaker(["alu","vorta","khaba","naki"]);

//console.log(x)



var obj = { name: "jim", house: 13, road: 5 };

console.dir(obj)