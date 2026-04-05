import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

function Charts({ transactions }) {
  // Line chart data (trend)
  const lineData = transactions.map((t, index) => ({
    name: `T${index + 1}`,
    amount: t.amount
  }));

  // Pie chart data (category-wise expenses)
  const categoryData = Object.values(
    transactions.reduce((acc, curr) => {
      if (curr.type === "expense") {
        if (!acc[curr.category]) {
          acc[curr.category] = {
            name: curr.category,
            value: 0
          };
        }
        acc[curr.category].value += curr.amount;
      }
      return acc;
    }, {})
  );

  return (
    <div className="grid grid-3">
      {/* Line Chart */}
      <div className="card">
        <h3>Balance Trend</h3>
        <LineChart width={300} height={200} data={lineData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" />
        </LineChart>
      </div>

      {/* Pie Chart */}
      <div className="card">
        <h3>Spending Breakdown</h3>
        <PieChart width={300} height={200}>
          <Pie data={categoryData} dataKey="value" outerRadius={80}>
            {categoryData.map((entry, index) => (
              <Cell key={index} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default Charts;