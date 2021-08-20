import React from 'react';
import Transaction from "../Transaction/Transaction";
import styles from "./TransactionListStyle.module.css";
const TransactionList = ({transaction}) => {
    const renderTransactions = (transaction_list)=>{
        return(
            <div>
                {
                    transaction_list.map((trans =>
                            <Transaction
                                title={trans.title}
                                amount={trans.amount}
                                type={trans.type}
                                key={trans.id}
                            />
                    ))
                }
            </div>
        )
    }
    return (
        <div>
            {
                transaction.length? renderTransactions(transaction) : <p className={styles.empty}>You have not added any transaction yet!</p>
            }
        </div>
    );
};

export default TransactionList;
