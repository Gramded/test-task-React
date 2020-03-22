import React, { useState } from 'react';
import './input.css';

const Input = ({text, important=false, dataToState, textType=false}) => {

    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    };

    return (
    <label htmlFor={text}>
        {text}:{important ? "*" : ''}
        <input type={textType ? "text" : "number"}
               id={text}
               onChange={onChangeHandler}
               value={value}
        />
    </label>
    )
};

export default Input;