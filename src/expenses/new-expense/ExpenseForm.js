import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setForm((prevState) => ({ ...prevState, title: e.target.value }));
  };
  const amountChangeHandler = (e) => {
    setForm((prevState) => ({ ...prevState, amount: e.target.value }));
  };
  const dateChangeHandler = (e) => {
    setForm((prevState) => ({ ...prevState, date: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: form.title,
      amount: +form.amount,
      date: new Date(form.date),
    };

    setForm({ title: "", amount: "", date: "" });

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={form.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={form.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={form.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.cancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
