import React from 'react';
import styles from "./TransactionStyle.module.css"
const Transaction = ({title,amount,type}) => {
    return (
        <div className={`${type === "expense"? styles.expContainer : styles.incContainer}`}>
            <div>
                title = <span>{title}</span>
            </div>
            <div>
                amount = <span>${amount}</span>
            </div>
            {/*<div>*/}
            {/*    type ={type}*/}
            {/*</div>*/}
        </div>
    );
};

export default Transaction;
