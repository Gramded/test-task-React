import React, { useState } from 'react';
import './Wifiname.css';

const Wifiname = ({text, id, name, disabled=true, dataToState, value_1, value_2, value_3}) => {

    let [value, kot_max] = useState('');


    const onChangeWifiName = (event) => {
        kot_max(event.target.value);
        dataToState(id,value);
    };

    return (
        <div className={'wifi-name-block'}>
        <label htmlFor={id}>
            {text}
            <select id={id}
                    name={name}
                    value={value}
                    disabled={disabled}
                    onChange={onChangeWifiName}>
            <option name={name} value={value_1} defaultValue>{value_1}</option>
            <option name={name} value={value_2}>{value_2}</option>
            <option name={name} value={value_3}>{value_3}</option>
            </select>
        </label>
        </div>
    );


};

export default Wifiname;
