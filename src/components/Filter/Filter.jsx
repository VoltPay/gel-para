import React, { useState } from 'react'
import "./Filter.css";
import Tables from "../Tables/Tables";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { Col, Row } from 'react-bootstrap';
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
                    <div>
                        <Button variant="transparent" onClick={handleShow} className="border-0 me-2 text-white text-nowrap">
                            Filtrele<IoFilterCircleOutline className='ms-2' size={22} />
                        </Button>
                    </div>

                    {/*filter button  */}
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end' className="off-canvas-custom" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtrele<IoFilterCircleOutline className='ms-2' size={22} /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        <Col lg="12" className="mb-3">
                            <input type="text" className='form-control custom-form-control p-3' placeholder='Filtre İsimleri' />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <input type="text" className='form-control custom-form-control p-3' placeholder='Filtre İsimleri' />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <input type="text" className='form-control custom-form-control p-3' placeholder='Filtre İsimleri' />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <input type="text" className='form-control custom-form-control p-3' placeholder='Filtre İsimleri' />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <input type="text" className='form-control custom-form-control p-3' placeholder='Filtre İsimleri' />
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Filter