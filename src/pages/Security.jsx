import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import AccountingAccuracy from '../components/Accounting Accuracy/AccountingAccuracy'
import Cards from '../components/Cards/Cards'
import Tables from '../components/Tables/Tables'
import Input from '../components/Input/Input'

function Security() {
    return (
        <div className='h-100'>
            <Row className='m-0 h-100' style={{ gap: "10px 0px" }}>
                <Col lg="12" className='px-lg-2 pe-lg-5 p-0'>
                    <div className="card-bg h-100 d-flex flex-column" >
                        <div className="p-lg-5 ps-lg-3 ms-lg-4  pb-lg-0 p-3">
                            <p className='security-title ms-0 ps-0'>Şifre</p>
                            <div className="linear-line ms-0 ps-0"></div>
                            <p className='security-desc mt-4'>Şifrenizi oluşturun veya güncelleyin.</p>
                        </div>
                        <Row className='px-lg-4 m-0' >
                            <Col lg="4" className='mt-lg-5'>
                                <Input label="Mevcut Şifreyi Doğrula" />
                            </Col>
                            <Col lg="4" className='mt-lg-5'>
                                <Input label="Yeni Şifre" />
                            </Col>
                            <Col lg="4" className='mt-lg-5'>
                                <Input label="Yeni Şifreyi Doğrula" />
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-end mt-auto pt-4"'>
                            <div className="d-flex justify-content-end mt-auto p-lg-4 p-3">
                                <button
                                    className="btn btn-primary-custom border-0 btn-navigate-form-step"
                                    type="button"
                                    step_number="2"
                                >
                                    Şifreyi Güncelle
                                </button>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Security