import React, {useState} from 'react';
import styles from "../ExpenseTrackerApp/ExpenseTrackerAppStyle.module.css";
import AddTransaction from "../AddTransaction/AddTransaction";

const Overview = ({expense, income}) => {
    const [showForm, setShowForm] = useState(false);
    const clickHandler = () => {
        setShowForm(showForm => !showForm);

    }
    return (
        <div>
            <div className={styles.balance_div}>
                <p>Balance : </p>
                <button onClick={clickHandler}>{showForm? "Cancel" : "ADD"}</button>
            </div>
            {
                showForm &&
                    <div>
                        <AddTransaction />
                    </div>
            }
            <div className={styles.info}>
                <div>
                    Expense : {expense}
                </div>
                <div>
                    Income : {income}
                </div>
            </div>
        </div>
    );
};

export default Overview;
