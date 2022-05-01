import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export const Expenses = ({
  expenses,
  deleteExpenseHandler,
  editExpenseHandler,
}) => {
  const [selectedYear, setSelectedYear] = useState();

  const filterByYearHandler = (filterValue) => setSelectedYear(+filterValue);

  const filteredExpensesByYear = !!selectedYear
    ? expenses.filter((expense) => expense.date.getFullYear() === selectedYear)
    : expenses;

  const noData = <div className="no-data">No data to show.</div>;

  const dropdownOptions = [
    ...new Set(
      expenses
        .map((ex) => ex.date.getFullYear())
        .sort()
        .reverse()
    ),
  ];

  return (
    <>
      <Card className="expenses">
        {expenses.length === 0 ? (
          noData
        ) : (
          <>
            <ExpensesChart expenses={filteredExpensesByYear} />
            <ExpensesFilter
              onFilterByYearHandler={filterByYearHandler}
              selectedOption={selectedYear}
              itemsLength={filteredExpensesByYear.length}
              options={dropdownOptions}
            />
            {filteredExpensesByYear.length === 0 ? (
              noData
            ) : (
              <ExpensesList
                items={filteredExpensesByYear}
                deleteExpenseHandler={deleteExpenseHandler}
                editExpenseHandler={editExpenseHandler}
              />
            )}
          </>
        )}
      </Card>
    </>
  );
};
