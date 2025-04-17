import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import HelpTabs from '../components/HelpTabs/HelpTabs'
import HelpContent from '../components/HelpContent/HelpContent'

function Help() {
  const [activeKey, setActiveKey] = useState('/home')

  return (
    <div className='pe-lg-5 h-100'>
      <div className="px-lg-3" style={{ height: '100%' }}>
        <div className='card-bg h-100'>
          <Row className='d-flex justify-content-between w-100 p-5'>
            <Col lg="3">
              <HelpTabs activeKey={activeKey} onSelect={setActiveKey} />
            </Col>
            <Col lg="9">
              <HelpContent activeKey={activeKey} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Help
