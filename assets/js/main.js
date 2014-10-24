var checkValue,
	saveValue,
	payValue,
	gasValue,
	rentValue,
	foodValue;

var pf;

var totalIncome,
	totalExpense,
	budget;

function calculateBudget() {
	pf = parseFloat;

	// Grab element values
	checkValue = document.getElementById('checkInput').value,
	saveValue = document.getElementById('saveInput').value,
	payValue = document.getElementById('payInput').value,
	gasValue = document.getElementById('gasInput').value,
	rentValue = document.getElementById('rentInput').value;
	foodValue = document.getElementById('foodInput').value;

	//Calculate Balance + Income
	totalIncome = pf(checkValue) + pf(saveValue) + pf(payValue);

	//Calculate Expenses
	totalExpense = pf(gasValue) + pf(rentValue) + pf(foodValue);
	
	//Calculate Budget
	budget = totalIncome - totalExpense;

	document.getElementById('budget').innerHTML = '$' + budget.toFixed(2);
}

document.getElementById('calcButton').addEventListener('click', calculateBudget, false);