import React, {useState} from 'react';

const SearchBar = ({setSearchValue}) => {
    // const [searchValue , setSearchValue] = useState("");
    const changeHandler=(event)=>{
        setSearchValue(event.target.value);

    }
    return (
        <div>
            <input type="text" placeholder={"Search..."} onChange={changeHandler} />
        </div>
    );
};

export default SearchBar;
