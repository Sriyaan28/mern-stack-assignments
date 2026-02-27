//4. Find the smallest element in marks array
let marks = [100,20,30,40,50];
let smallest = marks[0];
for(let i =1;i<marks.length;i++)
{
    if(smallest>marks[i]) 
        smallest = marks[i];
}
console.log(`Least marks among all are ${smallest}`);