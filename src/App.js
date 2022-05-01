import { useState } from "react";
import "./App.css";
import { Expenses } from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date("2019-1-15"),
    title: "Mohamed-Eldeeb 1",
    amount: 2500,
  },
  {
    id: "e2",
    date: new Date("2020-2-20"),
    title: "Mohamed-Eldeeb 2",
    amount: 5000,
  },
  {
    id: "e3",
    date: new Date("2020-3-20"),
    title: "Mohamed-Eldeeb 3",
    amount: 7000,
  },
  {
    id: "e4",
    date: new Date("2021-4-04"),
    title: "Mohamed-Eldeeb 4",
    amount: 9000,
  },
  {
    id: "e5",
    date: new Date("2022-5-09"),
    title: "Mohamed-Eldeeb 5",
    amount: 95000,
  },
  {
    id: "e6",
    date: new Date("2018-6-09"),
    title: "Mohamed-Eldeeb 6",
    amount: 3000,
  },
  {
    id: "e7",
    date: new Date("2020-7-12"),
    title: "Mohamed-Eldeeb 7",
    amount: 1500,
  },
  {
    id: "e8",
    date: new Date("2021-8-12"),
    title: "Mohamed-Eldeeb 8",
    amount: 4500,
  },
  {
    id: "e9",
    date: new Date("2022-9-12"),
    title: "Mohamed-Eldeeb 9",
    amount: 5000,
  },
  {
    id: "e10",
    date: new Date("2019-10-12"),
    title: "Mohamed-Eldeeb 10",
    amount: 1000,
  },
  {
    id: "e11",
    date: new Date("2020-11-12"),
    title: "Mohamed-Eldeeb 11",
    amount: 1200,
  },
  {
    id: "e12",
    date: new Date("2020-12-12"),
    title: "Mohamed-Eldeeb 12",
    amount: 1900,
  },
  {
    id: "e13",
    date: new Date("2020-12-12"),
    title: "Mohamed-Eldeeb 12",
    amount: 10000,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler = (newExpense) => {
    setExpenses((states) => [newExpense, ...states]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((states) => [...states.filter((expense) => expense.id !== id)]);
  };

  return (
    <div>
      <NewExpense saveExpenseDataHandler={saveExpenseDataHandler} />
      <Expenses
        expenses={expenses}
        deleteExpenseHandler={deleteExpenseHandler}
      />
    </div>
  );
};

export default App;
