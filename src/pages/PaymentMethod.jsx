import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import "../pages/PagesCss/PaymentMethod.css"
function PaymentMethod() {
  return (
    <div className='h-100'>
      <Row className='m-0 h-100' style={{ gap: "10px 0px" }}>
        <Col lg="12" className='px-lg-2 px-0 pe-lg-5'>
          <div className="card-bg h-100 p-lg-5 p-2">
            <p className='m-0 payment-title'>Kredi Kartı veya Banka Kartı <small className='ms-1'>Ödemeler İçin</small></p>
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