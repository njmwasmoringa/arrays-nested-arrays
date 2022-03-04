//define an array:- array useally a list of items
// datatype array is object
// key and value

const students = ['michael', 'Kariuki', 'Naomi'];
const result = [50, 30, 60, 100];


const student = {
    name: 'Abishaq',
    skills: ['html', 'javascript']
}

const combinedArray = [
    'source', 
    20, 
    'cake', 
    50, 
    [ 2, 45, 'Kings', 'Quens' ],
    students,
    student
];

// items in an array are indexed
// the index start at 0
console.log(students[0]);
console.log(combinedArray[4][2]);

console.log(combinedArray[6].name);

console.log(student['name']);
