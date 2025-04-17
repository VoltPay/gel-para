import React from 'react'
import "./Input.css"
import { Form } from 'react-bootstrap'

function Input({
    label,
    disabled = false,
    value,
    onChange,
    type = "text",
    id = "input-id",
    placeholder = ""
}) {
    return (
        <div>
            <Form>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id={id}
                        className='custom-form-control'
                        type={type}
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                    <label htmlFor={id} className='custom-form-label'>{label}</label>
                </Form.Floating>
            </Form>
        </div>
    )
}

export default Input
