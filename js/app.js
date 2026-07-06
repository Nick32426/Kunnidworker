document.addEventListener("DOMContentLoaded", () => {
  const summary = todaySummary();

  document.getElementById("todayIncome").innerHTML =
    "฿ " + summary.income.toLocaleString();

  document.getElementById("todayExpense").innerHTML =
    "฿ " + summary.expense.toLocaleString();

  document.getElementById("todayProfit").innerHTML =
    "฿ " + summary.profit.toLocaleString();
});