import React, {useEffect, useState} from 'react';
import styles from "./ExpenseTrackerAppStyle.module.css"
import TransactionList from "../TransactionList/TransactionList";
import Overview from "../Overview/Overview";

const ExpenseTrackerApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [balance, setBalance] = useState(0);
    const [transaction, setTransaction] = useState([]);
    const [showedTransaction, setShowedTransaction] = useState([]);
    const [searchValue, setSearchValue] = useState("");
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
    }, [transaction, searchValue])
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
        const validTransactions = transaction.filter(tr => tr.title.toLowerCase().includes(value.toLowerCase()));
        setShowedTransaction(validTransactions);
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
                showedTransaction={showedTransaction}
                setSearchValue={setSearchValue}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
            />
        </div>
    );
};

export default ExpenseTrackerApp;
