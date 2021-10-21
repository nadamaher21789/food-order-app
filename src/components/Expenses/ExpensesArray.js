import React from "react";
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
const ExpensesArray = props =>{
    let expensesContent = <p>No expenses found</p>;
    if (props.expenses.length === 0){
      return <h2 className="expenses-list__fallback"> Found No Expenses</h2>
    }
    return(
      <ul className='expense-list'>
        {props.expenses.map((expense)=>(
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        date={expense.date} 
        amount={expense.amount}/>
  
    ))}
      </ul>
    );
    // if (props.expenses.length > 0 ){
    //   expensesContent =  props.expenses.map((expense)=>(
    //     <ExpenseItem 
    //     key={expense.id}
    //     title={expense.title} 
    //     date={expense.date} 
    //     amount={expense.amount}/>
  
    // ));
    // }
    //return <ul className="expenses-list">

    // </ul>
};
export default ExpensesArray;