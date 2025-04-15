import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import AccountingAccuracy from '../components/Accounting Accuracy/AccountingAccuracy'
import Cards from '../components/Cards/Cards'
import Tables from '../components/Tables/Tables'

function Home() {
  return (
    <div className='h-100'>
      <Row className='m-0 h-100'  style={{gap:"10px 0px"}}>
        <Col lg="4" className='px-lg-2 px-0'>
          <div className="card-bg h-100">
            <AccountingAccuracy />
          </div>
        </Col>
        <Col lg="8" className='px-lg-2 pe-lg-5  px-0'>
          <div className='card-bg h-100'>
            <Cards />
          </div>
        </Col>
        <Col lg="12" className='px-lg-2 pe-lg-5'>
          <div className="card-bg h-100" >
            <Tables />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Home