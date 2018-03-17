var now  = new Date();
var days = ['Sunday','Monday','Thuesday','Wednesday','Trusday','Friday','Saturday',]
// console.log('The time is now',now);
// console.log('Todays Date is ', now.getDate());
 console.log('Todays day number of week  is ',days [now.getDay()]); 
// console.log('Current timezone is ', now.getTimezoneOffset());
// console.log('Current year is ', now.getYear());
// console.log('Current full year is ', now.getFullYear());
// console.log('Current month is ', now.getMonth());
// console.log('Current time in miliseconds is ', now.getTime());
// console.log('Now hours is ', now.getHours());
// console.log('Now minutes is ', now.getMinutes());
// console.log('Now seconds is ', now.getMinutes());
// console.log('Now miliseconds is ', now.getMilliseconds());

// changing date using any set method
// now.setDate(10);
// now.setFullYear(2019);
// console.log(now);

//console.log('Year', now.getFullYear(), 'Month', now.getMonth(), 'Date', now.getDate());
// var yesterday  = new Date();
// yesterday.setDate(4);
// console.log( now > yesterday);

// var durationOfTodayDate = now - yesterday;
// var hours = ((durationOfTodayDate / 1000) / 60) / 60;
// console.log('Difference between two date objects',hours);

//new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

//var aDate = new Date(2012,0,15);
//console.log(aDate);


##pblm
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
    console.log(result);
    
    
// Show output in this way dd-MM-yyyy / hh-mm-ss.....
function toFormat(str){
    var now = new Date();
    var formatItems = str.split('-'); // split is an array
    var formatedDate = '';
    for(var i=0; i < formatItems.length; i++){
        var st = formatItems[i];
        
        if(formatedDate != '') formatedDate += '-';
        
           if(st=='yyyy') formatedDate +=  now.getFullYear();
        else if(st=='MM') formatedDate +=  now.getMonth();
        else if(st=='dd') formatedDate +=  now.getDate();
        else if(st=='hh') formatedDate +=  now.getHours();
        else if(st=='mm') formatedDate +=  now.getMinutes();
        else if(st=='ss') formatedDate +=  now.getSeconds(); 
    }
    
    return formatedDate;
}
var result = toFormat('hh-mm-ss');
console.log(result);








