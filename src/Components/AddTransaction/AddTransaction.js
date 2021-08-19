import React, {useState} from 'react';
import styles from "./AddTransaction.module.css"
const AddTransaction = () => {
    const [title , setTitle] = useState("");
    const [amount , setAmount] = useState(0);
    const [type , setType] = useState(null);

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
        if (title === "" || amount=== 0){
            alert("You have to set transaction title and amount");
        }
        if (type === null){
            alert("you have to set transaction type");
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder={"Transaction Title (Required)"}
                        onChange={titleChangeHandler}
                        value={title}
                    />
                    <input
                        type="number"
                        placeholder={"Transaction Amount (Required)"}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className={styles.typeContainer}>
                    <input onChange={typeChangeHandler} type="radio" name={"type"} value={"income"} id={"income"}/>
                    <label htmlFor={"income"}>Income</label>
                    <input onChange={typeChangeHandler} type="radio" name={"type"} value={"expense"} id={"expense"}/>
                    <label htmlFor={"expense"}>Expense</label>
                </div>
                <div className={styles.addBtnContainer}>
                    <button type={"submit"}>ADD</button>
                </div>

            </form>
        </div>
    );
};

export default AddTransaction;
