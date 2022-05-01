import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ saveExpenseDataHandler }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          setShowFormHandler={setShowForm}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
