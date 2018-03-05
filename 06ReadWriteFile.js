var fs = require("fs");// loading library using require function

//##Reading file
function afterRead(err, contents){ // error in first parameter node rules, result in second paramerter
    if(err) console.log(err);
    
    console.log(contents.toString());
}


//console.log('Starting file read');
//syntex fs.readFile(file, callback)

//fs.readFile('jimCV.txt',afterRead); // using regular named function ( afterRead function reuse kra jay )

 //fs.readFile('jimCV.txt',function(err, contents){ //using annonymus function ( reuse kra jabe na )
//     if(err) console.log(err);
    
//     console.log(contents.toString());
// });

//fs.readFile('./old/syntex.js',afterRead);

//console.log('End of file reading code');

//## Writing file
//syntex fs.writeFile(file, dataToWrite, callback)

function afterWrite(err){
    if(err) console.log(err);
    
    console.log('File writing completed! boom!');
}

fs.appendFile('jimCV.txt', "\nMobile: 017111128585",afterWrite);




















