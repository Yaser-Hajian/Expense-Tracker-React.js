import React, {useState} from 'react';
import styles from "../ExpenseTrackerApp/ExpenseTrackerAppStyle.module.css";
import AddTransaction from "../AddTransaction/AddTransaction";

const Overview = ({expense, income , addTransaction , balance}) => {
    const [showForm, setShowForm] = useState(false);
    const clickHandler = () => {
        setShowForm(showForm => !showForm);

    }
    return (
        <div>
            <div className={styles.balance_div}>
                <p>Balance : ${balance}</p>
                <button onClick={clickHandler}>{showForm? "Cancel" : "ADD"}</button>
            </div>
            {
                showForm &&
                    <div>
                        <AddTransaction addTransaction={addTransaction}/>
                    </div>
            }
            <div className={styles.info}>
                <div className={styles.expenseBox}>
                    Expense: <span>${expense}</span>
                </div>
                <div className={styles.incomeBox}>
                    Income: <span>${income}</span>
                </div>
            </div>
        </div>
    );
};

export default Overview;
