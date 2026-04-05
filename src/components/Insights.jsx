import React from "react";

export default function Insights({ transactions }) {
  const expenses = transactions.filter(t => t.type === "expense");

  const categoryTotals = {};
  expenses.forEach(t => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const highestCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  return (
    <div className="card">
      <h3>Insights</h3>
      <p>Highest Spending Category: {highestCategory}</p>
    </div>
  );
}