import React, { useState } from "react";

function TransactionsTable({ transactions, role, setTransactions }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter + search
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || t.type === filter;

    return matchesSearch && matchesFilter;
  });

  // Delete (admin only)
  const handleDelete = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="card">
      <h3>Transactions</h3>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Table */}
      {filteredTransactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        <table width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td>{t.type}</td>

                {role === "admin" && (
                  <td>
                    <button onClick={() => handleDelete(t.id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionsTable;