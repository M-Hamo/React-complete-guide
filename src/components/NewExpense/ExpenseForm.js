import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, setShowFormHandler }) => {
  const initialStates = {
    title: "",
    amount: 0,
    date: new Date(),
  };

  const [input, setInput] = useState(initialStates);

  const data = {
    ...input,
    amount: +input.amount,
    id: Date.now(),
    date: new Date(input.date),
  };

  const onSubmitForm = (event$) => {
    event$.preventDefault();
    onSaveExpenseData(data);
    setShowFormHandler(false);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            value={input?.title}
            onChange={(event$) =>
              setInput((states) => {
                return { ...states, title: event$.target.value };
              })
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={input?.amount}
            onChange={(event$) =>
              setInput((states) => {
                return { ...states, amount: event$.target.value };
              })
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={input?.date}
            onChange={(event$) =>
              setInput((states) => {
                return { ...states, date: event$.target.value };
              })
            }
          />
        </div>

        <div className="new-expense__actions">
          <button onClick={() => setShowFormHandler(false)} type="button">
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
