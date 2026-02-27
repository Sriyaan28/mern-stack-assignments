// Array-operations-simple

// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
// --------------------------------

const marks = [78, 92, 35, 88, 40, 67];

//1.
const filteredMarks = marks.filter((mark)=> mark>=40)
console.log(filteredMarks)

//2.
const updatedMarks = marks.map((mark)=> mark+5)
console.log(updatedMarks)

//3.
const highestMark = marks.reduce((highest,mark)=> highest>mark?highest:mark)
console.log(highestMark)

//4.
const searchMark = marks.find((mark)=> mark<40)
console.log(searchMark)

//5.
const markIndex = marks.findIndex((mark)=> mark === 92)
console.log(markIndex)