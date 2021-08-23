import React, {useState} from 'react';
import Select from "react-select";
import styles from "./FilterStyle.module.css"
const FilterTransaction = ({setFilterValue}) => {
    const [selectedOption , setSelectedOption] = useState("");
    const options = [
        { value: 'All', label: 'All' },
        { value: 'expense', label: 'Expenses' },
        { value: 'income', label: 'Incomes' },
    ];
    const changeHandler=(event)=>{
        setFilterValue(event.value);
        // console.log(event.value)
        setSelectedOption(event);
    }
    return (
        <div className={styles.container}>
            <span>Filter By :</span>
            <Select
                value={selectedOption}
                onChange={changeHandler}
                options={options}
                className={styles.select}
            />
        </div>

    );
};

export default FilterTransaction;
