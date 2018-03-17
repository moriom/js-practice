// Write a function name toFormat where it will take string parameter like yyyy, MM, dd, hh, mm, ss
// which will return yyyy for year MM month and others as repectively

function toFormat(st){
    var now = new Date();
    if(st=='yyyy') return now.getFullYear();
    else if(st=='MM') return now.getMonth();
    else if(st=='dd') return now.getDate();
    else if(st=='hh') return now.getHours();
    else if(st=='mm') return now.getMinutes();
    else if (st=='ss') return now.getSeconds(); 
    else return 'Invalied parameter'
    
}
var result = toFormat('dd');
    //console.log(result);
    
function toFormat2(str){
    var now = new Date();
    var formatItems = str.split('-');
    var formatedDate = '';
    for(var i=0; i < formatItems.length; i++){
        var st = formatItems[i];
        
        if(formatedDate != '') formatedDate += '-';
        
        if(st=='yyyy') formatedDate += now.getFullYear();
        else if(st=='MM') formatedDate +=  now.getMonth();
        else if(st=='dd') formatedDate +=  now.getDate();
        else if(st=='hh') formatedDate +=  now.getHours();
        else if(st=='mm') formatedDate +=  now.getMinutes();
        else if (st=='ss') formatedDate += now.getSeconds(); 
    }
    
    return formatedDate;
}

var result2 = toFormat2('hh-mm-ss');
console.log(result2);

var now3 = new Date();
console.log(now3.getTimezoneOffset()) // Getting timezone