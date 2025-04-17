import React, { useState } from 'react';
import "./Tables.css";
import { Link } from 'react-router-dom';
import { Button, Modal, Table } from 'react-bootstrap';
import { FiEye } from 'react-icons/fi';
import { TbEditCircle } from 'react-icons/tb';
import { FaRegTrashCan } from 'react-icons/fa6';

const tableData = [
  {
    date: "18 Mar, 2023",
    type: "Giden",
    price: "599.99₺",
    statu: "Başarılı",
    details: {
      "İşlem Detayı": "Para Gönderildi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
  {
    date: "18 Mar, 2023",
    type: "Gelen",
    price: "599.99₺",
    statu: "Başarısız",
    details: {
      "İşlem Detayı": "Para Geldi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
  {
    date: "18 Mar, 2023",
    type: "Gelen",
    price: "599.99₺",
    statu: "Bekliyor",
    details: {
      "İşlem Detayı": "Para Geldi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
  {
    date: "18 Mar, 2023",
    type: "Giden",
    price: "599.99₺",
    statu: "Başarılı",
    details: {
      "İşlem Detayı": "Para Gönderildi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
  {
    date: "18 Mar, 2023",
    type: "Gelen",
    price: "599.99₺",
    statu: "Başarısız",
    details: {
      "İşlem Detayı": "Para Geldi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
  {
    date: "18 Mar, 2023",
    type: "Gelen",
    price: "599.99₺",
    statu: "Bekliyor",
    details: {
      "İşlem Detayı": "Para Geldi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
  {
    date: "18 Mar, 2023",
    type: "Giden",
    price: "599.99₺",
    statu: "Başarılı",
    details: {
      "İşlem Detayı": "Para Gönderildi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
  {
    date: "18 Mar, 2023",
    type: "Gelen",
    price: "599.99₺",
    statu: "Başarısız",
    details: {
      "İşlem Detayı": "Para Geldi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
  {
    date: "18 Mar, 2023",
    type: "Gelen",
    price: "599.99₺",
    statu: "Bekliyor",
    details: {
      "İşlem Detayı": "Para Geldi",
      "İşlem Tutarı": "580₺",
      "Komisyon": "19.99₺",
      "Toplam Tutar": "599.99₺",
      "Gönderen": "Melisa Eldem",
      "Alıcı": "Hilal Baş",
      "İşlem Id": "214124",
      "Açıklama": "Lorem ipsum dolor sit.",
      "Durum": "Tamamlandı."
    }
  },
];

function Tables() {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("");
  const [activeRow, setActiveRow] = useState(null);

  const handleShow = (row, type) => {
    setActiveRow(row);
    setModalType(type);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setActiveRow(null);
    setModalType("");
  };

  const renderModalContent = () => {
    if (!activeRow) return null;

    switch (modalType) {
      case "detay":
        return (
          <>
            {Object.entries(activeRow.details).map(([key, value], index) => (
              <div key={index} className="d-flex justify-content-between py-2">
                <p className='modal-title'>{key}</p>
                <p className='modal-text'>{value}</p>
              </div>
            ))}
          </>
        );
      case "duzenle":
        return (
          <div>
            <p><strong>İşlem Tutarı:</strong> {activeRow.price}</p>
          </div>
        );
      case "sil":
        return (
          <p><strong>{activeRow.type}</strong> işlem silinecek. Emin misiniz?</p>
        );
      default:
        return null;
    }
  };

  return (
    <div className='p-lg-4 p-4'>
      <div className='d-flex align-items-center justify-content-between'>
        <p className='m-0 table-title'>Son İşlemler</p>
        {/* <Link to={"/last-operations"} className='table-all-btn'>Tümünü Gör</Link> */}
      </div>
      <div className="linear-line mt-3"></div>
      <div className='table-height'>
        <Table className='mt-3 custom-table'>
          <thead>
            <tr>
              {["Tarih", "İşlem Tipi", "Tutar", "Transfer Durumu", "İşlemler"].map((name, i) => (
                <th key={i} className='text-nowrap custom-thead'>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, i) => (
              <tr key={i}>
                <td className='text-nowrap text-white'>{data.date}</td>
                <td className={`text-nowrap ${data.type === 'Gelen' ? 'table-success-text' : 'table-danger-text'}`}>
                  {data.type}
                </td>
                <td className='text-nowrap text-white'>{data.price}</td>
                <td className={`text-nowrap ${data.statu === 'Başarılı' ? 'table-success-text' :
                  data.statu === 'Başarısız' ? 'table-danger-text' :
                    'table-warning-text'
                  }`}>
                  {data.statu}
                </td>
                <td className='text-nowrap'>
                  <div className="d-flex align-items-center gap-3">
                    <Button variant="transparent" className="btn border-0 btns" onClick={() => handleShow(data, 'detay')}>
                      <FiEye size={20} />
                    </Button>
                    <Button variant="transparent" className="btn border-0 btns" onClick={() => handleShow(data, 'duzenle')}>
                      <TbEditCircle size={20} />
                    </Button>
                    <Button variant="transparent" className="btn border-0 btns" onClick={() => handleShow(data, 'sil')}>
                      <FaRegTrashCan size={18} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose} centered className='modal-customize'>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'detay' && "İşlem Detayı"}
            {modalType === 'duzenle' && "Düzenleme"}
            {modalType === 'sil' && "Silme Onayı"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderModalContent()}</Modal.Body>
        <Modal.Footer>
          <Button variant="transparent" className='linear-btn px-5 py-3' onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Tables;
