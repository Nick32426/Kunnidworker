import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUDT8l7D8D78p5TZS82alddE4YxkML_18",
  authDomain: "khunnid-worker.firebaseapp.com",
  projectId: "khunnid-worker",
  storageBucket: "khunnid-worker.firebasestorage.app",
  messagingSenderId: "865059617469",
  appId: "1:865059617469:web:cd31ec06852cfd74ccd5d4",
  measurementId: "G-TP9X6W3FN5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addTransaction(data) {
  await addDoc(collection(db, "transactions"), data);
}

export async function getTransactions() {
  const q = query(collection(db, "transactions"), orderBy("date", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function deleteTransaction(id) {
  await deleteDoc(doc(db, "transactions", id));
}

export function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

export function monthNow() {
  return new Date().toISOString().slice(0, 7);
}

export function money(n) {
  return "฿ " + Number(n || 0).toLocaleString("th-TH");
}