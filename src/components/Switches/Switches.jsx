import React from 'react'
import "./Switches.css"
import { Form } from 'react-bootstrap'
function Switches({ label,id }) {
    return (
        <div>
            <Form>
                <Form.Check
                    type="switch"
                    className='customize-checks'
                    id={id}
                    label={label}
                />
            </Form>
        </div>
    )
}

export default Switches