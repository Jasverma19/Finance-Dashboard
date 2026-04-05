import React from "react";

export default function DashboardCards({ transactions }) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-3">
      <div className="card">
        <h3>Total Balance</h3>
        <p>₹{balance}</p>
      </div>
      <div className="card">
        <h3>Income</h3>
        <p>₹{income}</p>
      </div>
      <div className="card">
        <h3>Expenses</h3>
        <p>₹{expense}</p>
      </div>
    </div>
  );
}