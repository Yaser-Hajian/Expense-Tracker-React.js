import React, {useEffect, useRef, useState} from 'react';
import styles from "./AddTransaction.module.css"
const AddTransaction = ({submitHandler , setShowForm , editItem}) => {
    const [title , setTitle] = useState("");
    const [amount , setAmount] = useState("");
    const [type , setType] = useState("");
    const radioInput1 = useRef();
    const radioInput2 = useRef();
    const titleInput = useRef();

    useEffect(()=>{
        titleInput.current.focus();
    },[])
    useEffect(()=>{
        if (editItem){
            setTitle(editItem.title);
            setAmount(editItem.amount);
            setType(editItem.type);
        }
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
    const onSubmit=(event)=>{
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
            submitHandler({title:title , amount : amount , type : type});
            setTitle("");
            setAmount("");
            setType(null);
            radioInput1.current.checked = false;
            radioInput2.current.checked = false;
            if (setShowForm){
                setShowForm(false);
            }
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit}>
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
                            checked={type==="income"}
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
                            checked={type==="expense"}
                        />
                        <label htmlFor={"expense"}>Expense</label>
                    </span>

                </div>
                <div className={styles.addBtnContainer}>
                    <button type={"submit"} className={styles.addBtn}>
                        {editItem? "Update" : "ADD" }
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddTransaction;
