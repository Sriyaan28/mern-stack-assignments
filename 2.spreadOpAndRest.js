//1. Copy & Extend and Array
let fruits = ["apple", "banana"];
let moreFruits = [...fruits,"orange"]
console.log(fruits)
console.log(moreFruits)

// 2. Update user object
let user = {
    name: "Ravi",
    city: "Hyderabad"
};

let updatedUser = {...user,age:25};

console.log(user)
console.log(updatedUser)

// 3. Using Rest parameter, find sum of n arguments

const findSum =(...numbers)=>{
    return numbers.reduce((sum,elem)=>sum+elem)
}

console.log(findSum(10,20))
console.log(findSum(10,20,30))
