// Question 2
function varTest () {
    var x = 1;
    {
        var x = 2;  
        console.log(x);  
    }
    console.log(x); 
}

varTest()
