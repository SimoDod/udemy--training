import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  };

  return (
  <ul className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItems name={expense.title} price={expense.amount} date={expense.date} key={expense.id} />
    ))};
  </ul>);
};

export default ExpensesList;
