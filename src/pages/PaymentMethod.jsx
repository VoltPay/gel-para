import React, { useState } from 'react'
import { Col, Row, Table, Tab, Button, Nav, Modal, Form } from 'react-bootstrap'
import Input from '../components/Input/Input';
import Select from '../components/Select/Select'
import "../pages/PagesCss/PaymentMethod.css"
const options = [
  { value: "1", label: "Bir" },
  { value: "2", label: "İki" },
  { value: "3", label: "Üç" },
]
function PaymentMethod() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [key, setKey] = useState('/home');
  const [selectedValue, setSelectedValue] = React.useState('');

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
              <Modal.Header closeButton className='border-0'>
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
                        <div>
                          <div className="row">
                            <div className='col-lg-12 mb-3'>
                              <Select options={options} defaultLabel='Banka Seçiniz' value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} name="numbers" />
                            </div>
                            <div className="col-lg-6">
                              <Input label="Kart Numarası" type='number' />
                            </div>
                            <div className="col-lg-6">
                              <Input label="Son Kullanma Tarihi" type='number' />
                            </div>
                            <div className="col-lg-6">
                              <Input label="Güvenlik Kodu" type='number' />
                            </div>
                            <div className="col-lg-6">
                              <Input label="Kart Sahibi Ad Soyad" type='text' />
                            </div>
                            <div className='col-lg-12'>
                              <div className='d-flex justify-content-start align-items-center'>
                                <Form.Check
                                  inline
                                  type="checkbox"
                                  label="Varsayılan Ödeme Yönetmi Olarak Ayarla"
                                  name="group1"
                                  id="check-10"
                                  className='custom-checkbox d-flex align-items-center gap-2'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="credit-card">
                        <div>
                          <div className="row">
                            <div className='col-lg-12 mb-3'>
                              <Select options={options} defaultLabel='Banka Seçiniz' value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} name="numbers" />
                            </div>
                            <div className="col-lg-6">
                              <Input label="Kart Numarası" type='number' />
                            </div>
                            <div className="col-lg-6">
                              <Input label="Son Kullanma Tarihi" type='number' />
                            </div>
                            <div className="col-lg-6">
                              <Input label="Güvenlik Kodu" type='number' />
                            </div>
                            <div className="col-lg-6">
                              <Input label="Kart Sahibi Ad Soyad" type='text' />
                            </div>
                            <div className='col-lg-12'>
                              <div className='d-flex justify-content-start align-items-center'>
                                <Form.Check
                                  inline
                                  type="checkbox"
                                  label="Varsayılan Ödeme Yönetmi Olarak Ayarla"
                                  name="group1"
                                  id="check-10"
                                  className='custom-checkbox d-flex align-items-center gap-2'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>

              </Modal.Body>
              <Modal.Footer className='border-0'>
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