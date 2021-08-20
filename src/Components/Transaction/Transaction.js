import React from 'react';
import styles from "./TransactionStyle.module.css"
const Transaction = ({title,amount,type}) => {
    return (
        <div className={styles.container}>
            <div>
                title = {title}
            </div>
            <div>
                amount ={amount}
            </div>
            <div>
                type ={type}
            </div>
        </div>
    );
};

export default Transaction;
