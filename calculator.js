/*
 * Web calculator
 * variable number will store the numbers that the user pressed
 * variable result will store results of math operations
 * variable element is an array to store the numbers
 * variable operator will store the operators (+, -, * or /) pressed by the user
 */

let number = "";
let result = 0;
let element = [];
let operator = "";

/*
* Function that gets the element from the HTML where we want to display numbers and results
* transform the content to display into a number and displays it on the calculator
*/
function displayF (item)
	{
		let display = document.querySelector("span");
		display.textContent = Number(item);
	}

/*Function called when a number is pressed. 
*Assigns that number to a variable
*/
function addNumber (inputNum)
{
   number += inputNum;
   displayF(number);
}

/*Function called when backspace button is pressed
*erases the last number on the display
*/
function backSpace()
{
	 number = number.slice(0,-1);
	 displayF(number);
}


//function to add a dot (".") to the number.
function addDot()
{
	for (var i = 0; i < number.length; i++) {
		if(number.charAt(i) === ".")
		return;
	};
	number += ".";
	displayF(number);
}

/*
* Function that is called when an operator button is pressed (+, -, * or /)
* checks if it's the first operator used and stores it into a variable 
* if it's not the first operate used it will call equal() function to display a result
*/
function operatorMethod (inputOperator)
{
	if (operator) {
		equal();
	}
	element.push(number);
	number = "";
	operator = inputOperator;
}

/*
* This function adds a number to the array and then do de mathd according to the values in the array and the operator used.
*/
function equal ()
{
	if (operator) {
		element.push(number)
	}
	switch(operator)
	{
	case "+":
	result = Number(element[element.length -2]) + Number(element[element.length - 1]);
	break;

	case "-":
	result = Number(element[element.length -2]) - Number(element[element.length - 1]);
	break;

	case "/":
	result = Number(element[element.length -2]) / Number(element[element.length - 1]);
	break;

	case "*":
	result = Number(element[element.length -2]) * Number(element[element.length - 1]);
	break;
	}
	number = result;
	element = [];
	operator = "";
	displayF(result);
}



