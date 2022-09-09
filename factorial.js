function fact() {
    var i, num, f;  
    f = 1;  
    num = document.getElementById("num").value; 
    num = parseInt(num);
    if(Number.isInteger(num) && num > 0){
        for(i = 1; i <= num; i++)    
        {  
        f = f * i;  
        }  
        i = i - 1;   

        document.getElementById("result").innerHTML = "The factorial of the number " + i + " is: " + f ; 
    }else {
        document.getElementById("result").innerHTML = "Invalid Input Try Again!"
    }
}  

function clearinput() {
    alert("Here");
    document.getElementById("num") = " ";
}