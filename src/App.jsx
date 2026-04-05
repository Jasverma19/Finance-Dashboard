import React, { useState } from "react";
import "./styles/main.css";

import DashboardCards from "./components/DashboardCards";
import Charts from "./components/Charts";
import TransactionsTable from "./components/TransactionsTable";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";

import { transactionsData } from "./Data/mockData";

const App = () => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="header">
        <h1>Finance Dashboard 💰</h1>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="cards-container">

        <RoleSwitcher role={role} setRole={setRole} />

        <DashboardCards transactions={transactions} />

        <Charts transactions={transactions} />

        <Insights transactions={transactions} />

        <TransactionsTable
          transactions={transactions}
          role={role}
          setTransactions={setTransactions}
        />
      </div>
      <div className="footer">
        <h1>Finance Dashboard 💰</h1>
      </div>
    </div>
  );
};

export default App;
