import Card from "../UI/Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount, id, onDeleteExpense }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>

      <div className="actions-container">
        <button
          type="button"
          className="actions-buttons"
          style={{
            backgroundColor: "green",
          }}
        >
          Edit
        </button>

        <button
          type="button"
          className="actions-buttons"
          style={{
            backgroundColor: "red",
          }}
          onClick={() => onDeleteExpense(id)}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
