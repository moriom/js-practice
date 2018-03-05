var now  = new Date();
// console.log('The time is now',now);
// console.log('Todays Date is ', now.getDate());
// console.log('Todays day number of week  is ', now.getDay()); //will clarify more at later


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

var aDate = new Date(2012,0,15);
console.log(aDate);