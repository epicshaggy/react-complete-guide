import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const clickHandler = () => {
    setShowForm(true);
  };
  const onCancel = () => {
    setShowForm(false);
  };

  let content = <button onClick={clickHandler}>Add New Expense</button>;
  if (showForm) {
    content = (
      <ExpenseForm cancel={onCancel} onSaveExpenseData={props.onNewExpense} />
    );
  }

  return <div className="new-expense">{content}</div>;
}

export default NewExpense;
