import React, {useState} from 'react';
import styles from "./ExpenseTrackerAppStyle.module.css"
import Transaction from "../Transaction/Transaction";
import Overview from "../Overview/Overview";
const ExpenseTrackerApp = () => {
    const [expense , setExpense] = useState(0);
    const [income , setIncome] = useState(0);
    const [transaction , setTransaction] = useState([]);
    return (
        <div className={styles.container}>
            <Overview expense={expense} income={income}/>
            <Transaction transaction={transaction}/>
        </div>
    );
};

export default ExpenseTrackerApp;
