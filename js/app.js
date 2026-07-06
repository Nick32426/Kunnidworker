const data = getTransactions();
const today = todayDate();

let income = 0;
let expense = 0;

data.forEach(item => {
  if (item.date === today) {
    if (item.type === "income") income += Number(item.amount);
    if (item.type === "expense") expense += Number(item.amount);
  }
});

const profit = income - expense;

document.getElementById("todayIncome").textContent = formatMoney(income);
document.getElementById("todayExpense").textContent = formatMoney(expense);
document.getElementById("todayProfit").textContent = formatMoney(profit);