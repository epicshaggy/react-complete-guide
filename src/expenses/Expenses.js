import { useState } from "react";
import Card from "../card/Card";
import "./Expenses.css";
import ExpensesFilter from "./expenses-filter/ExpensesFilter";
import ExpensesList from "./expenses-list/expenses-list";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterValue, setFilterValue] = useState("");
  const changeHandler = (e) => {
    setFilterValue(e);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterValue
  );

  return (
    <Card className="expenses">
      <ExpensesFilter filter={filterValue} onFilterChange={changeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
