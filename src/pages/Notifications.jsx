import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { MdOutlineNotificationsActive } from 'react-icons/md'

function Notifications() {
  const [notifications, setNotifications] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, reiciendis.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fugit magnam cupiditate, quae quaerat vero quibusdam aut delectus, quas laudantium molestias ab! Voluptatibus sint explicabo, officiis iure optio, dolores, autem doloremque recusandae excepturi quisquam architecto suscipit sequi repudiandae aliquid aperiam.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fugit magnam cupiditate, quae quaerat vero quibusdam aut delectus, quas laudantium molestias ab! Voluptatibus sint explicabo, officiis iure optio, dolores, autem doloremque recusandae excepturi quisquam architecto suscipit sequi repudiandae aliquid aperiam."
  ])

  const handleDelete = (index) => {
    const updated = [...notifications]
    updated.splice(index, 1)
    setNotifications(updated)
  }

  return (
    <div className='h-100'>
      <Row className='m-0 h-100' style={{ gap: "10px 0px" }}>
        <Col lg="12" className='px-lg-2 px-0 pe-lg-5'>
          <div className="card-bg h-100 p-lg-5 p-2 d-flex flex-column">
            <p className='payment-title'>
              <MdOutlineNotificationsActive size={22} className='me-3' />
              Bildirimler
            </p>
            <div className="linear-line"></div>

            <div className='mt-5 flex-grow-1'>
              {notifications.length > 0 ? (
                notifications.map((text, index) => (
                  <div key={index} className="bg-color  w-100 rounded-2 text-start d-flex justify-content-start p-3 mb-3">
                    <div className='d-flex align-items-center justify-content-between w-100'>
                      <p className='m-0 text-start'>{text}</p>
                      <button
                        className='btn border-0 icon-bg'
                        onClick={() => handleDelete(index)}
                      >
                        <IoCloseCircleOutline className='text-white' size={29} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-white fs-5 mt-5">
                  <div className='d-flex flex-column'>
                    <p>📬</p>
                    <p>Hiç bildiriminiz yok.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Notifications
