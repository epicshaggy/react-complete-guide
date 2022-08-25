import ExpenseItem from "../expense/ExpenseItem";
import "./expenses-list.css";

function ExpensesList(props) {
  if (props.expenses.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;

  const expensesContent = props.expenses.map((expense, i) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    );
  });

  return <ul className="expenses-list">{expensesContent}</ul>;
}

export default ExpensesList;
