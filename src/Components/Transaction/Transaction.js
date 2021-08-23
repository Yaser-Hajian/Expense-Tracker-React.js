import React from 'react';
import styles from "./TransactionStyle.module.css"
const Transaction = ({title,amount,type , deleteHandler}) => {
    const onDelete=()=>{
        deleteHandler();
    }
    return (
        <div className={`${type === "expense"? styles.expContainer : styles.incContainer}`}>
            <div className={styles.title}>
                Title= <span> {title}</span>
            </div>
            <div className={styles.amount}>
                Amount= <span> ${amount}</span>
            </div>
            <div>
                <button>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Transaction;
