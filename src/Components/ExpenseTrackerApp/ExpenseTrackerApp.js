import React, {useState} from 'react';
import styles from "./ExpenseTrackerAppStyle.module.css"
import Transaction from "../Transaction/Transaction";
import Overview from "../Overview/Overview";
const ExpenseTrackerApp = () => {
    const [expense , setExpense] = useState(0);
    const [income , setIncome] = useState(0);
    const [transaction , setTransaction] = useState([]);
    const addTransaction=(transactionData)=>{
        const newTransaction = {
            id : Date.now(),
            title : transactionData.title,
            amount : transactionData.amount,
            type : transactionData.type,
        }
        const current_transactions = [...transaction];
        current_transactions.unshift(newTransaction);
        setTransaction(current_transactions);
    }
    return (
        <div className={styles.container}>
            <Overview expense={expense} income={income} addTransaction={addTransaction}/>
            <Transaction transaction={transaction}/>
        </div>
    );
};

export default ExpenseTrackerApp;
