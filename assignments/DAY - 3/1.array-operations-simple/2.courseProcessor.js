// Array-operations-simple
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"
// ------------------------------------------

const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1.
let filteredCourses = courses.filter((course)=> course.length > 5);
console.log(`\nCourses with name length above 5: ${filteredCourses}`);

//2. 
let updatedCourses = courses.map((course)=> course.toUpperCase())
console.log(`\nCourses in Upper case: ${updatedCourses}`);

//3. 
let allCourses = courses.reduce((singleList,course)=>{
    singleList = singleList + ' | '  +course
    return singleList
})
console.log(`\n ${allCourses}`);

//4. 
let searchCourse = courses.find((course)=> course === 'react')
console.log(`\nSearch Course: ${searchCourse}`);

//5. 
let courseIndex = courses.findIndex((course)=>{  
    if(course === 'node')
        {                                   // instead of if statement
            return course                   // course === 'node'  -> returns the same value
        }
})
console.log(`\nSearch Course: ${courseIndex}`);
    
    