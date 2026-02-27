// DAY - 3
// Array-operations-simple

/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
1. filter() temperatures above 35
2. map() to convert all temperatures from Celsius → Fahrenheit
3. reduce() to calculate average temperature
4. find() first temperature above 40
5. findIndex() of temperature 28
*/
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//1.
const temp1 = temperatures.filter((temperature)=> temperature>35)
console.log(`Temperatures above 35: ${temp1}`)

//2. 
const temp2 = temperatures.map((temperature)=> (temperature*(9/5))+32)
console.log(`Temperatures in Fahrenheit: ${temp2}`)

//3.
const sum = temperatures.reduce((sum,temperature)=>sum+temperature)
const avg = sum/temperatures.length;
console.log(`Average temperature: ${avg}`)

//4. 
const temp3 = temperatures.find((temperature)=> temperature === 40)
console.log(`First temperature of 40: ${temp3}`)

//5.
const temp4 = temperatures.findIndex((temperature)=> temperature === 28)
console.log(`index of temperature 28: ${temp4}`)
