/*5. Write a function that receives 3 number args and 
   returns the big number 
*/
function maxOfThree(a,b,c)
{
    if(a>b && a>c) 
        return a;
    else if(b>a && b>c) 
        return b;
    else if(c>a && c>b) 
        return c;
    else 
        return "numbers are equal";     // any two numbers are equal
}

console.log(maxOfThree(10,10,20))