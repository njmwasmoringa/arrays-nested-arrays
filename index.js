let patients = []; // an array of strings - patientNames
let labResults = [
    ['Julius', 'blood'],
    ['Julius', 'pressure'],
    ['Mwangi', 'blood'],
    ['Mwangi', 'pressure'],
    ['Mwangi', 'stool']
]; // a nested array - array of arrays

let numberOfPatients = 0;

checkIn("Julius");
// checkIn("Mwangi");

console.log(labResults);

const labResultsForMwangi = chekOutAllLabResults("Mwangi");
console.log(labResultsForMwangi);

function checkIn(patiantName){
    patients.push(patiantName);
    numberOfPatients = patients.length;

    // collection blood samples can be done here
    checkInLab(patiantName, 'blood');
    checkInLab(patiantName, 'pressure');
}

function checkInLab(patiantName, typeOfTest){
    labResults.push([patiantName, typeOfTest]);
}

function checkOutFromLab(patiantName, typeOfResult, result){
    const findPatiant = (item)=>{
        if(item[0] == patiantName && item[1] == typeOfResult){
            return true;
        }
        else{
            return false;
        }
    }
    debugger;
    const labResult = labResults.find(findPatiant);
    labResult
    return labResult;
}

function chekOutAllLabResults(patiantName){
    const findALlResults = (item)=>{ //a callback function
        debugger
        return item[0] == patiantName;
    }
    const results = labResults.filter(findALlResults);
    debugger;
    return results;
}

function checkOut(){

}











//Nested array
/* let labResults = [
    ['Julius', 'blood'],
    ['Julius', 'pressure'],
    ['Mwangi', 'blood'],
    ['Mwangi', 'pressure'],
    ['Mwangi', 'stool']
];

const item3 = labResults[0];
const name = item3[1];
console.log(item3);
console.log(name);

function find(func){
    const name = 'julius';
    func(name);
}

const secondFunction = (name)=>{
    console.log(name);
}

find(secondFunction);
 */
