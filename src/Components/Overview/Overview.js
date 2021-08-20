import React, {useState} from 'react';
import AddTransaction from "../AddTransaction/AddTransaction";
import styles from "./OverviewStyle.module.css";
const Overview = ({expense, income , addTransaction , balance}) => {
    const [showForm, setShowForm] = useState(false);
    const clickHandler = () => {
        setShowForm(showForm => !showForm);

    }
    return (
        <div>
            <div className={styles.balance_div}>
                <p className={styles.balance}>Balance : ${balance}</p>
                <button
                    onClick={clickHandler}
                    className={`${showForm ? styles.cancelBtn : styles.addBtn}`}
                    >
                    {showForm? "Cancel" : "ADD"}
                </button>
            </div>
            {
                showForm &&
                    <div>
                        <AddTransaction addTransaction={addTransaction} setShowForm={setShowForm}/>
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
