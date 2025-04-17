import React, { useState } from 'react'
import "./HelpAccordion.css"
import Accordion from 'react-bootstrap/Accordion'

const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    stroke="currentColor"
    strokeWidth="2"
    className={`custom-chevron ${isOpen ? 'rotate-180' : ''}`}
  >
    <path d="M2 5l6 6 6-6" />
  </svg>
)

function HelpAccordion({ items }) {
  const [activeKey, setActiveKey] = useState(null)

  return (
    <Accordion activeKey={activeKey} onSelect={(e) => setActiveKey(e)} className="customize-accordion">
      {items.map((item, index) => {
        const itemKey = `item-${index}`
        const isOpen = activeKey === itemKey
        return (
          <Accordion.Item eventKey={itemKey} key={itemKey}>
            <Accordion.Header>
              <span className="me-2">{item.title}</span>
              <span className="ms-auto"><ChevronIcon isOpen={isOpen} /></span>
            </Accordion.Header>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}

export default HelpAccordion
