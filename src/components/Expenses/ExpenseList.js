import React, {useState} from "react";
import ExpensesArray from "./ExpensesArray";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from "./ExpensesChart";
const ExpenseList =(props)=>{
 const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    expense => {
      return expense.date.getFullYear().toString()  === filteredYear;
    }
  );
 console.log(filteredExpenses);
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} 
            onChangeFilter={filterChangeHandler} />
            
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesArray expenses = {filteredExpenses}/>
            </Card>
    );
  
}
export default ExpenseList;