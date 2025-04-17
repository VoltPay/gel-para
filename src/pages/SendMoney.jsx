import React, { useEffect } from 'react';
import StepByStep from '../components/StepByStep/StepByStep'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CiCircleCheck } from 'react-icons/ci'
import Input from '../components/Input/Input';

function SendMoney() {
  return (
    <div className='pe-lg-5 h-100'>
      <div className='card-bg ' style={{ height: '14%' }}>
        <StepByStep />
      </div>
      <div className='h-100'>
        <div className="pe-lg-0" style={{ height: '83%' }}>
          <div className="card-bg h-100">
            <Form id="userAccountSetupForm" name="userAccountSetupForm" enctype="multipart/form-data" method="POST" className='h-100'>
              <section id="step-1" className="form-step p-4 h-100">
                <div className="d-flex flex-column gap-3">
                  <p className='m-0'>Kişi Bilgileri</p>
                  <div className="linear-line"></div>
                </div>
                <Row className='mt-4 position-relative'>
                  <Col lg="6" className='mb-lg-4 mb-1'>
                    <Input label="Gönderici İsim Soyisim" />
                  </Col>
                  <Col lg="6" className='mb-lg-4 mb-1'>
                    <Input label="Gönderici E-Posta" />
                  </Col>
                  <Col lg="6" className='mb-lg-4 mb-1'>
                    <Input label="Müşteri Numarası" />
                  </Col>
                  <Col lg="6" className='mb-lg-4 mb-1'>
                    <Input label="Talep Edilecek Miktar" />
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-auto pt-4">
                  <button
                    className="btn btn-primary-custom border-0 btn-navigate-form-step"
                    type="button"
                    step_number="2"
                  >
                    İlerle
                  </button>
                </div>
              </section>
              <section id="step-2" className="form-step d-none p-4 h-100">
                <div className="d-flex flex-column gap-3">
                  <p className='m-0'>Para Talep Et</p>
                  <div className="linear-line"></div>
                </div>

                <Row className='mt-4 d-flex align-items-center'>
                  <Col lg="12" className='my-2'>
                    <p className='m-0 my-2'>Doğrulama Kodu</p>
                    <input type="text" className='form-control custom-form-control py-3 text-white' />
                  </Col>
                  <div className='d-flex flex-column gap-3 align-items-center justify-content-center mt-4'>
                    <p>Kod gelmedi mi?</p>
                    <div className=''>
                      <button className='btn btn-primary-custom px-5 py-3 border-0'>Tekrar Gönder</button>
                    </div>
                  </div>
                </Row>
                <div className="d-flex justify-content-end mt-auto pt-4 gap-3">
                  <button className="border-0 btn btn-primary-custom btn-navigate-form-step" type="button" step_number="1">
                    Geri
                  </button>
                  <button className="border-0 btn btn-primary-custom btn-navigate-form-step" type="button" step_number="3">
                    Para Talep Et
                  </button>
                </div>
              </section>
              <section id="step-3" className="form-step d-none p-4 h-100">
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
                <div className="d-flex justify-content-end mt-auto pt-4 gap-3">
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

export default SendMoney