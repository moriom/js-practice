//write a function name itemCounter which will take an array of items,
// and will return an object where object will tell how many times occurs same charcter like {s:3, y: 1}

function itemCounter(arr){
    
    var obj = {};
    
    for( var i = 0; i < arr.length; i++ ){
        
        var key = arr[i];
        if(obj[key] == undefined){
           obj[key] = 1; 
        }else{
            obj[key] += 1; 
        }
        
    }
    return obj;
    
}

var result = itemCounter(['s','b','s','t','w','y','b','flat','jaMonChai','flat','y','jaMonChai']);
console.log(result);