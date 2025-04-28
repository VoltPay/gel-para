import React from 'react';
import "./Select.css";

function Select({ options = [], defaultLabel = "Seçiniz", onChange, value, name }) {
    return (
        <div>
            <select 
                className="form-select customize-select" 
                aria-label="Dynamic select menu"
                onChange={onChange}
                value={value}
                name={name}
            >
                <option value="">{defaultLabel}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
