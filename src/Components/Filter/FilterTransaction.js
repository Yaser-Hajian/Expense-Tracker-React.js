import React, {useState} from 'react';
import Select from "react-select";

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
        <div>
            <span>Filter By :</span>
            <Select
                value={selectedOption}
                onChange={changeHandler}
                options={options}
            />
        </div>

    );
};

export default FilterTransaction;
