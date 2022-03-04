/* // functions
// in build function

// prompt(); asks the user to enter certain inform
// alert(); alert the user about something
// confirm(); requesting the user to confirm about a statement

// function accept parameter
// define parameter for the function to use */

const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const answerDiv = document.getElementById('answer');
const button = document.getElementById('calculateButton');

button.addEventListener('click', clickAction);

function clickAction(){
    const theFirstNumber = numberOne.value;
    const theSecondNumber = numberTwo.value;

    if(isNaN(theFirstNumber)){
        alert('Please enter a number in the first field');
        return;
    }

    if(isNaN(theSecondNumber)){
        alert('Please enter a number in the second field');
        return;
    }

    const answer = addingTwoNumbers(parseInt(theFirstNumber), parseInt(theSecondNumber));

    answerDiv.innerText = answer;
}   

function addingTwoNumbers(firstNumber=1, secondNumber=2){
    // can return some results
    // or it may just perfom some action and not return
    // if you do not pass argument to a function when calling it, the parameters will undefined

    const answer = firstNumber + secondNumber;
    return answer;
}

addingTwoNumbers(/* arguments */);




// arrays