import { useState } from "react";
import "./App.css";
import Expenses from "./expenses/Expenses";

import NewExpense from "./expenses/new-expense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler = (expenseData) => {
    expenseData.id = Math.random().toString();
    setExpenses((prevExpenses) => {
      let exps = [];

      if (!!prevExpenses.length) exps = prevExpenses;
      exps = [...exps, expenseData];

      return exps;
    });
  };

  return (
    <div className="App">
      <NewExpense onNewExpense={saveExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
