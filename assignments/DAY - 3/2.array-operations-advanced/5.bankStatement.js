// Array-operations-advanced

// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000
// --------------------------------------------------

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//1.
const filterTransactions = transactions.filter((trst)=>trst.type === 'credit')
console.log(filterTransactions)

//2.
const updatedTrstList = transactions.map((trst)=>trst.amount)
console.log(updatedTrstList)

//3.
const accBalance = transactions.reduce((finalBalance,trst)=>{
    if(trst.type === 'credit')
    {
        finalBalance += trst.amount
    }
    else if(trst.type === 'debit')
    {
        finalBalance -= trst.amount
    }
    return finalBalance
},0)
console.log(accBalance)

//4.
const findTrst = transactions.find((trst)=>trst.type === 'debit')
console.log(findTrst)

//5.
const trstIndex = transactions.findIndex((trst)=>trst.amount === 10000)
console.log(trstIndex)