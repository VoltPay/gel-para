import React, { useState } from 'react'
import "./Tables.css"
import { Link } from 'react-router-dom'
import { Button, Modal, Table } from 'react-bootstrap'
import { FiEye } from 'react-icons/fi';
import { TbEditCircle } from 'react-icons/tb';
import { FaRegTrashCan } from 'react-icons/fa6';
const buttons = [
  { id: 1, icon: <FiEye size={20} />, content: 'Detaylı Bilgi' },
  { id: 2, icon: <TbEditCircle size={20} />, content: 'Düzenleme' },
  { id: 3, icon: <FaRegTrashCan size={20} />, content: 'Silmek İstediğinize Emin Misiniz?.' }
];

function Tables() {
  const tableHeadName = ["Tarih", "İşlem Tipi", "Tutar", "Transfer Durumu", "İşlemler"];
  const tableData = [
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Başarılı",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "529.99₺",
      statu: "Başarısız",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Bekliyor",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Başarılı",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Bekliyor",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Başarılı",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Bekliyor",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Başarılı",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Bekliyor",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Başarılı",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Bekliyor",
      process: "",
    },
    {
      date: "18 Mar, 2023",
      type: "lorem ipsum",
      price: "599.99₺",
      statu: "Başarılı",
      process: "",
    },
  ];

  const [show, setShow] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  const handleShow = (content) => {
    setActiveContent(content);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setActiveContent(null);
  };
  return (
    <div className='p-lg-4 p-4'>
      <div className='d-flex align-items-center justify-content-between'>
        <p className='m-0 table-title'>Son İşlemler</p>
        <Link to={""} className='table-all-btn'>Tümünü Gör</Link>
      </div>
      <div className="linear-line mt-3"></div>
      <div className='table-height'>
        <Table className='mt-3 custom-table'>
          <thead>
            <tr>
              {tableHeadName.map((name, i) => (
                <th key={i} className='text-nowrap custom-thead'>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, i) => (
              <tr key={i}>
                <td className='text-nowrap text-white'>{data.date}</td>
                <td className='text-nowrap text-white'>{data.type}</td>
                <td className='text-nowrap text-white'>{data.price}</td>
                <td className={`text-nowrap ${data.statu === 'Başarılı' ? 'table-success-text' : data.statu === 'Başarısız' ? 'table-danger-text' : data.statu === 'Bekliyor' ? 'table-warning-text' : ''}`}>
                  {data.statu}
                </td>
                <td className='text-nowrap'>
                  <div className="d-flex align-items-center justify-content-start gap-3">
                    {buttons.map((btn) => (
                      <Button key={btn.id} variant="transparent" className="btn btns border-0" onClick={() => handleShow(btn)}>
                        {btn.icon}
                      </Button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{activeContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{activeContent?.content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Tables;
