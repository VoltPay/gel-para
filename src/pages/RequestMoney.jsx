import React, { useEffect } from 'react';
import StepByStep from '../components/StepByStep/StepByStep'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CiCircleCheck } from 'react-icons/ci'

function RequestMoney() {
  return (
    <div className='pe-lg-5'>
      <div className='card-bg '>
        <StepByStep />
      </div>
      <div>
        <div className="pe-lg-0">
          <div className="card-bg">
            <Form id="userAccountSetupForm" name="userAccountSetupForm" enctype="multipart/form-data" method="POST">
              <section id="step-1" className="form-step p-4">
                <div className="d-flex flex-column gap-3">
                  <p className='m-0'>Talep Detayları</p>
                  <div className="linear-line"></div>
                </div>
                <Row className='mt-4'>
                  <Col lg="3">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="sender-name"
                        className='custom-form-control'
                        type="text"
                      />
                      <label htmlFor="sender-name" className='custom-form-label'>Gönderici İsim Soyisim</label>
                    </Form.Floating>
                  </Col>
                  <Col lg="3">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="sender-email"
                        className='custom-form-control'
                        type="email"
                      />
                      <label htmlFor="sender-email" className='custom-form-label'>Gönderici E-Posta</label>
                    </Form.Floating>
                  </Col>
                  <Col lg="3">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="sender-customer-number"
                        className='custom-form-control'
                        type="number"
                      />
                      <label htmlFor="sender-customer-number" className='custom-form-label'>Müşteri Numarası</label>
                    </Form.Floating>
                  </Col>
                  <Col lg="3">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="amount-requested"
                        className='custom-form-control'
                        type="text"
                      />
                      <label htmlFor="amount-requested" className='custom-form-label'>Talep Edilecek Miktar</label>
                    </Form.Floating>
                  </Col>
                </Row>
                <div className="mt-3 d-flex align-items-center justify-content-end">
                  <button className="border-0 btn btn-primary-custom  btn-navigate-form-step" type="button" step_number="2">
                    İlerle
                  </button>
                </div>
              </section>
              <section id="step-2" className="form-step d-none p-4">
                <div className="d-flex flex-column gap-3">
                  <p className='m-0'>Para Talep Et</p>
                  <div className="linear-line"></div>
                </div>
                <div className='d-flex flex-column align-items-center gap-3 mt-3'>
                  <p className='m-0'>Para Talep Ettiğiniz Kişi</p>
                  <small>melisa.eldem@voltrun.com.tr</small>
                </div>
                <Row className='mt-4'>
                  <Col lg="6">
                    <p className='m-0 mb-2'>Açıklama</p>
                    <FloatingLabel
                      controlId="floatingTextarea"
                      label="Comments"
                      className="mb-3 w-100 bg-transparent"
                    >
                      <Form.Control as="textarea" placeholder="Leave a comment here" className='custom-form-control text-white' />
                    </FloatingLabel>
                  </Col>
                  <Col lg="6">
                    <p className='m-0 mb-2'>Tarih</p>
                    <input type="date" className='form-control custom-form-control py-3 text-white' />
                  </Col>

                </Row>
                <div className="mt-3 d-flex justify-content-end gap-2">
                  <button className="border-0 btn btn-primary-custom btn-navigate-form-step" type="button" step_number="1">
                    Geri
                  </button>
                  <button className="border-0 btn btn-primary-custom btn-navigate-form-step" type="button" step_number="3">
                    Para Talep Et
                  </button>
                </div>
              </section>
              <section id="step-3" className="form-step d-none p-4">
                <div className="d-flex flex-column gap-3">
                  <p className='m-0'>Para Talebiniz</p>
                  <div className="linear-line"></div>
                  <div className="card p-5 bg-color">
                    <div className="card-body">
                      <div className='d-flex flex-column justify-content-center align-items-center'>
                        <CiCircleCheck size={120} className='text-primary-color' />
                        <p className='m-0 mb-2 text-primary-color'>Başarılı!</p>
                        <p className='m-0 mb-2'>Para Talebi Gönderildi</p>
                        <small className='text-center'>Başarıyla 24 ₺ tutarında para talebi rtghujk@gmail.com adresine gönderildi, <br /><Link to={""}>Aktivite</Link> kısmından talep detaylarını görebilirsiniz.</small>
                      </div>

                    </div>
                  </div>

                </div>
                <div className="mt-4 d-flex align-items-center gap-3 justify-content-end">
                  <button className="border-0 btn btn-primary-custom btn-navigate-form-step" type="button" step_number="2">
                    Yazdır
                  </button>
                  <button className="border-0 btn-primary-custom submit-btn" type="submit">Tekrar Para Talep Et</button>
                </div>
              </section>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestMoney