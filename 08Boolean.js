// Javascript treat null, undefined, 0(zero), ''(empty string) as false
// And all others treat as true

var str = '';
console.log(!!str);

var moneyInPocket = 2;
console.log(!!moneyInPocket)

if(str || moneyInPocket){
    console.log('Yes Ive money or text');
}else{
    console.log('Sorry! No money or text');
}

var color = 'red';
console.log(color == 'red');

if(color != 'red') console.log('Color is not red');
else console.log('Color is red');