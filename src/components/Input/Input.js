import React, { useState } from 'react';
import './input.css';

const Input = ({text, id, important=false, dataToState, textType=false, class_name="test-class", disabled=true}) => {

    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        setValue(`${event.target.value}`);
        dataToState(id, event.target.value);
    };


    return (
    <label htmlFor={id}>
        {text}:{important ? "*" : ''}
        <input type={textType ? "text" : "text"} // !!! заменил второй "number" на "text", тк возникала ощибка с точкой
               id={id}
               onInput={onChangeHandler}
               value={value}
               className={class_name}
               disabled={disabled}
        />
    </label>
    )
};

export default Input;