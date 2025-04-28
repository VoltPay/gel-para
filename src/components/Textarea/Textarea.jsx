import React from 'react';
import "./Textarea.css";

function Textarea({ value, onChange, placeholder = "Write here...", name, rows = 5 }) {
    return (
        <div>
            <textarea
                className="form-control customize-textarea"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                rows={rows}
            />
        </div>
    );
}

export default Textarea;
