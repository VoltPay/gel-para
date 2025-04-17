import React from 'react'
import { Nav } from 'react-bootstrap'
import "./HelpTabs.css"

function HelpTabs({ activeKey, onSelect }) {
    return (
        <Nav
            variant="tabs"
            activeKey={activeKey}
            onSelect={(selectedKey) => onSelect(selectedKey)}
            className='d-flex flex-column gap-3 customize-tabs mb-lg-0 mb-5'
        >
            <Nav.Item>
                <Nav.Link eventKey="/home" href="#">Hesabım</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="pay-tab" href="#">Ödeme</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="security-tab" href="#">Güvenlik</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="pay-method-tab" href="#">Ödeme Yöntemleri</Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

export default HelpTabs
