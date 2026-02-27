// DAY - 2
// Employee performance management
/*
1.Insert new Emp at 2nd position
2.Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"
*/
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

//1. 
employees.splice(2,0,{eno: 106,name:'Suresh',marks:[40,60,97]})
console.log(employees)

//2.
for(let e in employees)
{
    if(employees[e].name == 'Kiran')
    {
        employees.splice(e,1)
    }
}


//3.
for(let e in employees)
{
    if(employees[e].name == 'Sneha')
    {
        employees[e].marks.splice((employees[e].marks.length-1),1,75)
    }
}
console.log(employees)