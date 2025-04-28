import React, { useState } from 'react'
import { Col, Row, Table, Tab, Button, Nav, Modal } from 'react-bootstrap'
import "../pages/PagesCss/PaymentMethod.css"
function PaymentMethod() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [key, setKey] = useState('/home');

  return (
    <div className='h-100'>
      <Row className='m-0 h-100' style={{ gap: "10px 0px" }}>
        <Col lg="12" className='px-lg-2 px-0 pe-lg-5'>
          <div className="card-bg h-100 p-lg-4 p-2">
            <p className='m-0 payment-title mb-3'>Kredi Kartı veya Banka Kartı <small className='ms-1'>Ödemeler İçin</small></p>
            <Button variant="transparent" className='m-0 p-0 border-0' onClick={handleShow}>
              <img src="../../src/assets/img/bank-card-1.png" alt="" width={250} />
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Kart Ekle</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Tab.Container id="left-tabs-example" activeKey={key} onSelect={(k) => setKey(k)}>
                  <Nav variant="pills" className='d-flex justify-content-around w-100'>
                    <Nav.Item>
                      <Nav.Link eventKey="/bank-card">Banka Kartı</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="credit-card">Kredi Kartı</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <div className="mt-3">
                    <Tab.Content>
                      <Tab.Pane eventKey="/bank-card">
                        <h3>Active Tab Content</h3>
                        <p>Here is some content for the Active tab.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="credit-card">
                        <h3>Option 2 Content</h3>
                        <p>Content for Option 2 goes here.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>

              </Modal.Body>
              <Modal.Footer>
                <div className='d-flex align-items-center gap-2'>

                  <Button variant="transparent" className='closer-btn fw-black text-white' onClick={handleClose}>
                    Kapat
                  </Button>
                  <Button variant="transparent" className='primary-btn fw-600 text-black' onClick={handleClose}>
                    Kaydet
                  </Button>
                </div>

              </Modal.Footer>
            </Modal>
          </div>
        </Col>

        <Col lg="12" className='px-lg-2 pe-lg-5'>
          <div className="card-bg h-100 p-lg-5 p-2" >
            <p className='m-0 payment-title'>Banka Hesabı <small className='ms-1'>Çekimler ve Yatırım İşlemleri İçin</small></p>

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PaymentMethod