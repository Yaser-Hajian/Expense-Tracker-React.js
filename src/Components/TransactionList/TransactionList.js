import React from 'react';
import Transaction from "../Transaction/Transaction";

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
                            />
                    ))
                }
            </div>
        )
    }
    return (
        <div>
            {
                transaction.length? renderTransactions(transaction) : <p>You have not added any transaction yet!</p>
            }
        </div>
    );
};

export default TransactionList;
