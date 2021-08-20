import React from 'react';

const Transaction = ({title,amount,type}) => {
    return (
        <div>
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
