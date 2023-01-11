import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const changeYearHandler = (year) => {
    setEnteredYear(year);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === enteredYear
  );

  return (
    <Card className="expenses">
      <li>
      <ExpensesFilter selected={enteredYear} onChangeYear={changeYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      </li>
    </Card>
  );
}

export default Expenses;
