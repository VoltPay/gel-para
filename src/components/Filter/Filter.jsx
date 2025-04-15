import React, { useState } from 'react'
import "./Filter.css";
import Tables from "../Tables/Tables";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoFilterCircleOutline } from 'react-icons/io5';
function Filter() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="card-bg">
                <div className='d-flex align-items-center justify-content-between '>
                    {/* date filter */}
                    <div className='d-flex flex-column p-4 w-100'>
                        <input type="date" className='form-control w-50 date-filter-custom w-75' />
                    </div>
                    {/* date filter */}
                    {/* filter button */}
                    <Button variant="transparent" onClick={handleShow} className="border-0 me-2 text-white text-nowrap">
                        Filtrele<IoFilterCircleOutline className='ms-2' size={22} />
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} placement='end' className="card-bg text-white" >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                    {/*filter button  */}
                </div>
            </div>
        </div>
    )
}

export default Filter