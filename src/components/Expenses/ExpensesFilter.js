import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({
  itemsLength,
  selectedOption,
  onFilterByYearHandler,
  options,
}) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div className="itemsLength">
          <label>Filter by year </label>
          <label>Showed ({itemsLength}) Item</label>
        </div>
        <select
          value={selectedOption}
          onChange={(event$) => onFilterByYearHandler(event$.target.value)}
        >
          <option value="">Select All</option>
          {options.reverse().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
