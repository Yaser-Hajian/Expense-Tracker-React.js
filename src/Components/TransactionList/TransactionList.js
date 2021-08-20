import React from 'react';
import Transaction from "../Transaction/Transaction";
import styles from "./TransactionListStyle.module.css";
import SearchBar from "../SearchBar/SearchBar";
const TransactionList = ({transaction ,showedTransaction,setSearchValue}) => {
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
    // const emptyTransaction=()=>{
    //     return(
    //         <div className={styles.empty}>
    //             <SearchBar setSearchValue={setSearchValue}/>
    //             <p className={styles.empty}>You have not added any transaction yet!</p>
    //         </div>
    //     )
    // }
    return (
        <div>
            <h3 className={styles.title}>Transactions</h3>
            <SearchBar setSearchValue={setSearchValue}/>
            {
                showedTransaction.length? renderTransactions(showedTransaction) :

                transaction.length ?
                    <p className={styles.empty}>no item matched!</p>
                    :
                    <p className={styles.empty}>You have not added any transaction yet!</p>
            }
        </div>
    );
};

export default TransactionList;
