import "./ExpensesList..css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items, deleteExpenseHandler }) => {
  return (
    <>
      {items.map((expense) => (
        <ExpenseItem
          key={expense?.id}
          {...expense}
          onDeleteExpense={deleteExpenseHandler}
        />
      ))}
    </>
  );
};

export default ExpensesList;
