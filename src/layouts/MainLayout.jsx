import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Col, Row } from 'react-bootstrap'

function MainLayout() {
    return (
        <div className='h-100'>
            <div className='px-lg-5 px-2'>
                <Header />
            </div>
            <Row className='m-0 h-100'>
                <Col lg="3" className='mt-4 ps-lg-5 px-3'><Sidebar /></Col>
                <Col lg="9" className='mt-4 px-lg-0 px-3'>
                    <Outlet />
                </Col>
            </Row>
            <footer><Footer /></footer>
        </div>
    )
}

export default MainLayout