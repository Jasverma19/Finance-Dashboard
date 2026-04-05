import React from "react";

export default function RoleSwitcher({ role, setRole }) {
  return (
    <div className="card">
      <h3>Role</h3>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}