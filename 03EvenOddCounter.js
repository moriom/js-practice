//write a function name evenOddCounter which will take an array of integer and
//will return an object with counted even and odd numbers. for example {even: 6, odd: 2}

/*
function evenOddCounter(arr){
    
    //var obj = {};
    
     var even = 0;
     
     var odd = 0;
    
    for( var i = 0; i < arr.length; i++ ){
        
        var item = arr[i];
        
        if( item % 2 == 0){
            
          even += 1;
        
        }else{
            
            odd += 1;
        }
    }
    // obj.even = even;
    // obj.odd = odd;
    // obj['even'] = even;
    // obj['odd'] = odd;
    // return obj;
    
    return { even: even, odd: odd };
    
    
}*/


function evenOddCounter(arr) {
    
    var obj  = {even: 0, odd:0};
    
    for (var i = 0; i < arr.length; i++ ) {
        
        var item = arr[i];
        
        if(item % 2 == 0){
            
            obj.even += 1;
            
        }else{
            
            obj.odd += 1;
        }
    }
    
    return obj;
}

var result = evenOddCounter([8,5,9,3,4,6,7,2,6,8,2]);

console.log(result);

