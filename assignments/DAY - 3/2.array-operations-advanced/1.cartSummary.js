// Array-operations-advanced

/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
1. Use filter() to get only inStock products
2. Use map() to create a new array with:  { name, totalPrice }
3. Use reduce() to calculate grand total cart value
4. Use find() to get details of "Mouse"
5. Use findIndex() to find the position of "Keyboard"
*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1.
const inStockItems = cart.filter((items)=>items.inStock)
console.log(inStockItems)

//2.
const totCart = cart.map((item)=>{
    let itemPrice = item.price * item.quantity
    return {name: item.name, totalPrice: itemPrice}
})
console.log(totCart)

//3.
const grandTotal = cart.reduce((acc,item)=> acc+(item.price*item.quantity),0)
console.log(`Grand total of cart: ${grandTotal}`)

//4.
let searchItem1 = 'Mouse'
console.log(cart.find((item)=>item.name === searchItem1))

//5. 
let searchItem2 = 'Keyboard'
console.log(`Index of Keyboard: ${cart.findIndex((item)=>item.name = searchItem2)}`)