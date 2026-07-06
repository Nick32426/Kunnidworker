const STORAGE_KEY = "kunnid_transactions";

function getTransactions() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveTransactions(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function addTransaction(item) {
  const data = getTransactions();
  item.id = Date.now();
  data.push(item);
  saveTransactions(data);
}

function deleteTransaction(id) {
  const data = getTransactions().filter(item => item.id !== id);
  saveTransactions(data);
}

function formatMoney(amount) {
  return "฿ " + Number(amount).toLocaleString("th-TH");
}

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function getMonth(date) {
  return date.slice(0, 7);
}