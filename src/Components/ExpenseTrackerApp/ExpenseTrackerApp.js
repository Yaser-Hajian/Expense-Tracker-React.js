import React, {useEffect, useState} from 'react';
import styles from "./ExpenseTrackerAppStyle.module.css"
import TransactionList from "../TransactionList/TransactionList";
import Overview from "../Overview/Overview";

const ExpenseTrackerApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [balance, setBalance] = useState(0);
    const [transaction, setTransaction] = useState([]);
    const [searchedTransaction, setSearchedTransaction] = useState([]);
    const [filteredTransaction, setFilteredTransaction] = useState([]);
    const [searchValue, setSearchValue] = useState("All");
    const [filterValue, setFilterValue] = useState("All");

    useEffect(() => {
        let incomeValue = 0, expenseValue = 0;
        transaction.filter(trans => trans.type === "expense" ?
            expenseValue += parseFloat(trans.amount) : incomeValue += parseFloat(trans.amount));
        setIncome(incomeValue);
        setExpense(expenseValue);
        const newBalance = incomeValue - expenseValue;
        setBalance(newBalance);

    }, [transaction])
    useEffect(() => {
        searchTransaction(searchValue);
        // filterTransaction(filterValue);
    }, [transaction, searchValue ])
    useEffect(()=>{
        filterTransaction(filterValue);
    },[filterValue , searchedTransaction])
    const addTransaction = (transactionData) => {
        const newTransaction = {
            id: Date.now(),
            title: transactionData.title,
            amount: transactionData.amount,
            type: transactionData.type,
        }
        const current_transactions = [...transaction];
        current_transactions.unshift(newTransaction);
        setTransaction(current_transactions);
    }
    const searchTransaction = (value) => {
        if (value === "All" || value === ""){
            setSearchedTransaction(transaction);
        }else{
            const validTransactions = transaction.filter(tr => tr.title.toLowerCase().includes(value.toLowerCase()));
            setSearchedTransaction(validTransactions);
        }
    }
    const deleteHandler = (id) => {
        const newTransactionsList = transaction.filter(tran => tran.id !== id);
        setTransaction(newTransactionsList);
    }
    const editHandler=(transactionObject , id)=>{
        const copy_transactions_list = [...transaction];
        const index = transaction.findIndex(trans => trans.id === id);
        const copy_transaction = {...transaction[index]};
        copy_transaction.title = transactionObject.title;
        copy_transaction.amount= transactionObject.amount;
        copy_transaction.type = transactionObject.type;
        copy_transactions_list[index] = copy_transaction;
        setTransaction(copy_transactions_list);
    }
    const filterTransaction=(value)=>{
        if (value === "All" ){
            setFilteredTransaction(searchedTransaction);
        }else{
            const filter_trans = searchedTransaction.filter(trans => trans.type === value);
            setFilteredTransaction(filter_trans)
        }
    }
    return (
        <div className={styles.container}>
            <Overview
                expense={expense}
                income={income}
                addTransaction={addTransaction}
                balance={balance}
            />
            <TransactionList
                transaction={transaction}
                transactionsList={filteredTransaction}
                setSearchValue={setSearchValue}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
                setFilterValue={setFilterValue}
            />
        </div>
    );
};

export default ExpenseTrackerApp;
