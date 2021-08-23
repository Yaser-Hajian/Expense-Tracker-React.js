import React from 'react';
import styles from "./TransactionStyle.module.css"
const Transaction = ({title,amount,type , onDelete ,onEdit}) => {
    return (
        <div className={`${type === "expense"? styles.expContainer : styles.incContainer}`}>
            <div className={styles.info}>
                <div className={styles.title}>
                    Title= <span> {title}</span>
                </div>
                <div className={styles.amount}>
                    Amount= <span> ${amount}</span>
                </div>
            </div>

            <div className={styles.optionsContainer}>
                <button onClick={()=>onEdit()} className={styles.editBtn}>Edit</button>
                <button onClick={()=>onDelete()}className={styles.DeleteBtn}>Delete</button>
            </div>
        </div>
    );
};

export default Transaction;
