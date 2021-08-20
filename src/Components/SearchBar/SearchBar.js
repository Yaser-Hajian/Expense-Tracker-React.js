import React, {useState} from 'react';
import styles from "./SearchBarStyle.module.css"
const SearchBar = ({setSearchValue}) => {
    // const [searchValue , setSearchValue] = useState("");
    const changeHandler=(event)=>{
        setSearchValue(event.target.value);

    }
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input}  type="text" placeholder={"Search..."} onChange={changeHandler} />
        </div>
    );
};

export default SearchBar;
