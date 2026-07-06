let income = 0;
let expense = 0;

document.getElementById("todayIncome").innerHTML =
"฿ " + income.toLocaleString();

document.getElementById("todayExpense").innerHTML =
"฿ " + expense.toLocaleString();

document.getElementById("todayProfit").innerHTML =
"฿ " + (income-expense).toLocaleString();