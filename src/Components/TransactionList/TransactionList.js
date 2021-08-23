import React, {useState} from 'react';
import Transaction from "../Transaction/Transaction";
import styles from "./TransactionListStyle.module.css";
import SearchBar from "../SearchBar/SearchBar";
import AddTransaction from "../AddTransaction/AddTransaction";
import FilterTransaction from "../Filter/FilterTransaction";

const TransactionList = ({transaction, transactionsList, setSearchValue, deleteHandler , editHandler , setFilterValue}) => {
    const [editItem, setEditItem] = useState("");
    const editItemHandler=(transactionObject)=>{
        editHandler(transactionObject , editItem.id);
        setEditItem("");
    }
    const renderTransactions = (transactions)=> {
        return (
            <div>
                {
                    transactions.map((trans =>
                            <Transaction
                                title={trans.title}
                                amount={trans.amount}
                                type={trans.type}
                                onDelete={() => deleteHandler(trans.id)}
                                onEdit={() => setEditItem(trans)}
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
                editItem ?
                    (
                        <div className={styles.editContainer}>
                            <AddTransaction submitHandler={editItemHandler} editItem={editItem}/>
                        </div>
                    )
                    :
                    (
                        <>
                            <h3 className={styles.title}>Transactions</h3>
                            <SearchBar setSearchValue={setSearchValue}/>
                            <FilterTransaction setFilterValue={setFilterValue}/>
                            {
                                transactionsList.length ? renderTransactions(transactionsList)
                                    :
                                    transaction.length ?
                                        <p className={styles.empty}>no item matched!</p>
                                        :
                                        <p className={styles.empty}>You have not added any transaction yet!</p>
                            }
                        </>
                    )
            }

        </div>
    );
};

export default TransactionList;
