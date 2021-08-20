import React from 'react';
import Transaction from "../Transaction/Transaction";
import styles from "./TransactionListStyle.module.css";
import SearchBar from "../SearchBar/SearchBar";
const TransactionList = ({transaction ,setSearchValue}) => {
    const renderTransactions = (transaction_list)=>{
        return(
            <div>
                <h3 className={styles.title}>Transactions</h3>
                <SearchBar setSearchValue={setSearchValue}/>
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
