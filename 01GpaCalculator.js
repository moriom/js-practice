// Problem 1 : write a function name gpaCalculator which will take two parameters,
// first parameter will take an object of marks and
// second one will take an array of subject names to calculated average gpa.
// the function will return average gpa for example 2.80
// show validation error message if subject mark is not number, for example - please enter a integer value


    function gpaCalculator( obj, arr ){
        
        var x = 0;
        
        var errorMessage = '';
        
        for( var i = 0; i < arr.length; i++){
            
            var key = arr[i];
            
            var mark = obj[key];
            
            if(mark == undefined){
                errorMessage = 'The subject ' + key + ' mark not found.';
                break; 
            }
            
            if( typeof mark != 'number'){
                
               errorMessage = 'Please enter an integer value';
                break; 
                
            }
            
            if(mark > 100){
                errorMessage = 'Mark must be less than equal 100';
                break; 
            }
            
            if(mark < 0){
                errorMessage = 'Mark must be greater than equal 0';
                break; 
            }

            x += mark;
        }
        
        if(errorMessage != ''){
            
            return errorMessage;
        }
        
        return (x/100) * arr.length ; 
    }
    
var result = gpaCalculator( { Bangla : 70, English : -1, Science : 85, Urdu: "50"}, [ 'Bangla','English'] ); //, Urdu, Bangla, English

    if(typeof result == 'number'){
    
     console.log('\n Gpa is :',result ); 
 
} else{
    
    console.log( '\n ', result);  
}

        