import React,{ useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props)=>{
 const[title, setTitle] = useState(props.title);
//  const month = props.date.toLocaleString('en-US',{month:'long'});
//  const day = props.date.toLocaleString('en-US',{day: '2-digit'});
//  const year = props.date.getFullYear(); 
  console.log('expenseitem evaluatedd!!!!!');
 const  clickHandler = ()=>{
    setTitle('Updatedddd');
 };
 return(
    <Card className="expense-item">
        <ExpenseDate date ={props.date} />
        <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">${props.amount}</div>
    
        </div>
        <button onClick={clickHandler}>Change title</button>
    </Card> 
    );
}

export default ExpenseItem;