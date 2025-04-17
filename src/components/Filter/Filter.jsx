import React, { useState } from 'react'
import "./Filter.css";
import Tables from "../Tables/Tables";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { Col, Row } from 'react-bootstrap';
import Input from '../Input/Input';
import Switches from '../Switches/Switches';
function Filter() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="card-bg">
                <div className='p-4 mb-lg-0 mb-5'>
                    <div className='d-flex align-items-center justify-content-between gap-2 flex-lg-nowrap flex-wrap '>
                        {/* date filter */}
                        <input type="text" className='form-control date-filter-custom order-lg-1 order-3' placeholder='İşlem Arayınız' />
                        <input type="date" className='form-control date-filter-custom order-lg-2 order-2' />
                        {/* date filter */}
                        {/* filter button */}
                        <Button variant="transparent" onClick={handleShow} className="order-lg-3 order-1 border-0 me-2 text-white text-nowrap">
                            Filtrele<IoFilterCircleOutline className='ms-2' size={22} />
                        </Button>
                        {/*filter button  */}
                    </div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end' className="off-canvas-custom" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filtrele<IoFilterCircleOutline className='ms-2' size={22} /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className='ps-4'>
                        <Col lg="12" className="mb-3">
                            <Switches label="Tüm İşlemler" id="1" />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Switches label="Giden İşlemler" id="2" />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Switches label="Gelen İşlemler" id="3" />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Switches label="Başarılı İşlemler" id="4" />
                        </Col>
                        <Col lg="12" className="mb-3">
                            <Switches label="Başarısız İşlemler" id="5" />
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Filter