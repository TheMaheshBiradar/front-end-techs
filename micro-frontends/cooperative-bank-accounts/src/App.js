
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [accounts, setAccounts] = useState(['']);

  const fetchAccounts = () => {
    setAccounts(['Savings','Mortgage','Custody','Retirement']);
    };

  useEffect(() => {
    if (accounts === null) {
      fetchAccounts();
    }
  });

  return (
      <div>
        <header>
          <h3>Accounts</h3>
          <div>
            <button onClick={() => fetchAccounts()}>Show All Accounts</button>
          </div>
          {accounts.map(value => <div>{value}</div>)}
        </header>
      </div>
  );
}

export default App;
