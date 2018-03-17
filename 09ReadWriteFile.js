var fs = require("fs");// loading library using require function (fs == filesystem)

//##Reading file
//syntex fs.readFile(file, callback)
function afterRead(err, contents){ // error in first parameter node rules, result in second paramerter
    if(err) console.log(err);
    
    console.log(contents.toString());
}
console.log('Starting file read');
fs.readFile('jimCV.txt',afterRead); // using regular named function ( afterRead function reuse kra jay )


/*var fs = require("fs");// loading library using require function (fs == filesystem)
//##Reading file
function afterRead(err, contents){ // error in first parameter node rules, result in second paramerter
    if(err){
        console.log(err);
    }
    else{
        console.log(contents.toString());
    }
}

//

console.log('Starting file read');
//syntex fs.readFile(file, callback)

fs.readFile('./08Boolean.js',afterRead);*/

//  fs.readFile('jimCV.txt',function(err, contents){ //using annonymus function ( reuse kra jabe na )
//     if(err) console.log(err);
    
//     console.log(contents.toString());
// });

//fs.readFile('./old/syntex.js',afterRead);
//fs.readFile('C:\\Users\\Jim\\syntex.js',afterRead);
//fs.readFile('../jim-js-practice/08Boolean.js',afterRead);

console.log('End of file reading code');

//## Writing file
// syntex fs.writeFile(file, dataToWrite, callback)

function afterWrite(err){
    if(err) console.log(err);
    
    console.log('File writing completed! boom!');
}

fs.appendFile('jimCV.txt', "\nMobile: 017111128585",afterWrite);
// or fs.writeFile('jimCV.txt', "\nMobile: 017111128585",afterWrite);


//Pblm: Supose you have an array with five different persons name, you have to write those names into a text file and then read names.
var fs = require("fs");

function write(err){
     if(err) console.log(err);
    console.log('File writing completed! boom!');
 }
 
 function writeToFile(){
var arr = ['Mim','Jim','Hany'];
for(var i = 0; i<arr.length; i++){
    var item = arr[i];
    
    var whatToWrite = '\n' + item;
    fs.appendFile('abc.txt',whatToWrite, write);
}
}
writeToFile();

function read(err,contents){
    if(err) console.log(err);
    console.log(contents.toString());
}
console.log('File reading started');
fs.readFile('abc.txt',read);


    












