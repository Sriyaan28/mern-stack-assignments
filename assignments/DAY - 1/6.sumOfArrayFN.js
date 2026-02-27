//6. Function that recieves an array as arg and returns their sum
function sumOfArray(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfArray([1,2,3,4]));
