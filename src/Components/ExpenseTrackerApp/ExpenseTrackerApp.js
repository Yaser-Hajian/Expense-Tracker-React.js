import React, {useState} from 'react';
import styles from "./ExpenseTrackerAppStyle.module.css"
import Transaction from "../Transaction/Transaction";
const ExpenseTrackerApp = () => {
    const [expense , setExpense] = useState(0);
    const [income , setIncome] = useState(0);
    const [transaction , setTransaction] = useState([]);
    return (
        <div className={styles.container}>
            <div className={styles.balance_div}>
                <p>Balance : </p>
                <button>ADD</button>
            </div>
            <div className={styles.info}>
                <div>
                    Expense : {expense}
                </div>
                <div>
                    Income : {income}
                </div>
            </div>
            <Transaction transaction={transaction}/>
        </div>
    );
};

export default ExpenseTrackerApp;
