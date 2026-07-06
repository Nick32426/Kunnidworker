const STORAGE_KEY = "kunnidworker_transactions";

function getTransactions() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveTransactions(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function addTransaction(type, amount, category, note) {
  const data = getTransactions();

  data.push({
    id: Date.now(),
    type,
    amount: Number(amount),
    category,
    note,
    date: new Date().toISOString().slice(0, 10)
  });

  saveTransactions(data);
}

function deleteTransaction(id) {
  const data = getTransactions().filter(item => item.id !== id);
  saveTransactions(data);
}

function todaySummary() {
  const today = new Date().toISOString().slice(0, 10);
  return summaryByFilter(x => x.date === today);
}

function monthSummary() {
  const month = new Date().toISOString().slice(0, 7);
  return summaryByFilter(x => x.date.startsWith(month));
}

function summaryByFilter(filterFn) {
  const data = getTransactions().filter(filterFn);

  const income = data
    .filter(x => x.type === "income")
    .reduce((s, x) => s + x.amount, 0);

  const expense = data
    .filter(x => x.type === "expense")
    .reduce((s, x) => s + x.amount, 0);

  return {
    income,
    expense,
    profit: income - expense
  };
}