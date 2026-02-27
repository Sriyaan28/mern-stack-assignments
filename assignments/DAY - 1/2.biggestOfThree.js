//2. Find the big number in given three numbers
let a = 10;
let b = 20;
let c = 30;
if(a>b && a>c) 
    console.log(`${a} is greatest`);
else if(b>a && b>c) 
    console.log(`${b} is greatest`);
else if(c>a && c>b) 
    console.log(`${c} is greatest`);
else 
    console.log('Two or more numbers are equal');