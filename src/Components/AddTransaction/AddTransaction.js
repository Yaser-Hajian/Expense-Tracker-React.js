import React, {useEffect, useRef, useState} from 'react';
import styles from "./AddTransaction.module.css"
const AddTransaction = ({addTransaction}) => {
    const [title , setTitle] = useState("");
    const [amount , setAmount] = useState("");
    const [type , setType] = useState(null);
    const radioInput1 = useRef();
    const radioInput2 = useRef();
    const titleInput = useRef();

    useEffect(()=>{
        titleInput.current.focus();
    },[])

    const titleChangeHandler = (event)=>{
        setTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }
    const typeChangeHandler=(event)=>{
        setType(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        let isOK = true;
        if (title === "" || amount === ""){
            alert("You have to set transaction title and amount");
            isOK = false;
        }
        if (type === null){
            alert("you have to set transaction type");
            isOK = false;
        }
        if (isOK){
            addTransaction({title:title , amount : amount , type : type});
            setTitle("");
            setAmount("");
            setType(null);
            radioInput1.current.checked = false;
            radioInput2.current.checked = false;
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder={"TransactionList Title (Required)"}
                        onChange={titleChangeHandler}
                        value={title}
                        ref={titleInput}
                    />
                    <input
                        type="number"
                        placeholder={"TransactionList Amount (Required)"}
                        onChange={amountChangeHandler}
                        value={amount}
                    />
                </div>
                <div className={styles.typeContainer}>
                    <span>
                        <input
                            onChange={typeChangeHandler}
                            type="radio"
                            name={"type"}
                            value={"income"}
                            id={"income"}
                            ref={radioInput1}
                        />
                    <label htmlFor={"income"}>Income</label>
                    </span>
                    <span>
                        <input
                            onChange={typeChangeHandler}
                            type="radio"
                            name={"type"}
                            value={"expense"}
                            id={"expense"}
                            ref={radioInput2}
                        />
                        <label htmlFor={"expense"}>Expense</label>
                    </span>

                </div>
                <div className={styles.addBtnContainer}>
                    <button type={"submit"} className={styles.addBtn}>ADD</button>
                </div>

            </form>
        </div>
    );
};

export default AddTransaction;
