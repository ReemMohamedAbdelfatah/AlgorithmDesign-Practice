/*
The main steps to design an algorithm are three steps:

-Determine the values of this properties
Input --->  Processes  --->  Output 
r     --->  PI*(r*r)   --->  area

-Write Pseudocode using your preferred language
Receive input values ---> r
Implement the processes ---> PI*(r*r)
Return/Print the output ---> area

-Modelling your algorithm using flowchart or activity diagram

*/
// Circle Area
const area = (r) => {
return Math.PI * (r * r);
}
console.log(area(10));
console.log(area(20));

// Parallelogram area
const pArea = (b, h) => {
return b*h;
}
console.log(pArea(10,20));
console.log(pArea(20,40));

// Trapezoid Area
const areaP1 = (a,b) => {
return (a + b) / 2; 
}

const tArea = (a,b,h) => {
return areaP1(a,b) * h;
}

console.log(tArea(10,20,30));
