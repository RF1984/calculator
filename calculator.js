/*
  In this file you can write your javascript code. Make sure the DOM is loaded before executing your custom code by
  attaching an appropriate event listener to the document.
 */

let number = "";
let result = 0;
let element = [];
let operator = "";

function displayF (item)
	{
		let display = document.querySelector("span");
		display.textContent = Number(item);
	}

function addNumber (inputNum)
{
   number += inputNum;
   displayF(number);
}
function backSpace()
{
	 number = number.slice(0,-1);
	 displayF(number);
}

function addDot()
{
	for (var i = 0; i < number.length; i++) {
		if(number.charAt(i) === ".")
		return;
	};
	number += ".";
	displayF(number);
}

function operatorMethod (inputOperator)
{
	if (operator) {
		equal();
	}
	element.push(number);
	number = "";
	operator = inputOperator;
}
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



