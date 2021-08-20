import React, {useEffect, useState} from 'react';
import styles from "./ExpenseTrackerAppStyle.module.css"
import TransactionList from "../TransactionList/TransactionList";
import Overview from "../Overview/Overview";

const ExpenseTrackerApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [balance, setBalance] = useState(0);
    const [transaction, setTransaction] = useState([]);
    useEffect(()=>{
        const newBalance =  income - expense;
        setBalance(newBalance);
    },[expense , income])
    const addTransaction = (transactionData) => {
        const newTransaction = {
            id: Date.now(),
            title: transactionData.title,
            amount: transactionData.amount,
            type: transactionData.type,
        }
        const current_transactions = [...transaction];
        current_transactions.unshift(newTransaction);
        setTransaction(current_transactions);
        if (transactionData.type === "expense") {
            setExpense(exp => exp + parseInt(transactionData.amount) );
        } else {
            setIncome(inc => inc + parseInt(transactionData.amount));
        }
    }
    return (
        <div className={styles.container}>
            <Overview
                expense={expense}
                income={income}
                addTransaction={addTransaction}
                balance={balance}
            />
            <TransactionList transaction={transaction}/>
        </div>
    );
};

export default ExpenseTrackerApp;
