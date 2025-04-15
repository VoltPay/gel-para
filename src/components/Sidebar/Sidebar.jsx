import React, { useRef } from 'react'
import "./Sidebar.css"
import { FaRegCopy, FaRegPaperPlane } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { IoWalletOutline } from 'react-icons/io5';
import { Button } from 'react-bootstrap';
const Sidebar = () => {
  const textRef = useRef();

  const handleCopy = () => {
    const text = textRef.current?.innerText;
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          toast.success("Kopyalandı!");
        })
        .catch((err) => {
          toast.error("Kopyalanamadı!");
          console.error("Kopyalama hatası:", err);
        });
    }
  };
  return (
    <div>
      <div className="card-bg py-3">
        {/* user name copy */}
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div>
            <div className='d-flex align-items-center gap-2 p-3'>
              <img src="https://i.pinimg.com/736x/52/5a/25/525a256bd065ddffe5bcc3a72121e245.jpg" alt="image" className='rounded-circle img-fluid' width={40} height={40} />
              <p className='sidebar-username-title p-0 m-0'>Melisa Eldem</p>
            </div>
          </div>
          <div>
            <div>
              <div className='d-flex align-items-center gap-2 p-3'>
                <p className='sidebar-copy-text m-0' ref={textRef}>248242</p>
                <FaRegCopy
                  onClick={handleCopy}
                  style={{ cursor: 'pointer' }}
                  title="Kopyala"
                />
                <ToastContainer position="top-right" autoClose={2000} theme="colored" toastStyle={{
                  backgroundColor: 'rgba(126, 226, 113, 0.8)',
                  color: 'white',
                  borderRadius: '8px',
                }} />
              </div>
            </div>
          </div>
        </div>
        {/* user name copy */}
        <div className="linear-line "></div>
        {/* kullanılabilir bakiye */}
        <div className='d-flex flex-column gap-3 align-items-center py-4 '>
          <p className='m-0 bakie-title'>Kullanılabilir Bakiye</p>
          <p className='m-0 bakie-price'>987.450₺</p>
        </div>
        {/* kullanılabilir bakiye */}
        <div className="linear-line "></div>
        {/* para çek para yatır */}
        <div className='d-flex aligin-items-center justify-content-around  py-4 gap-3'>
          <Link to={""} className='text-decoration-none text-white'>
            <div className='d-flex align-items-center gap-2'>
              <FaRegPaperPlane />
              Para Çek
            </div>
          </Link>
          <Link to={""} className='text-decoration-none text-white'>
            <div className='d-flex align-items-center gap-2'>
              <IoWalletOutline />
              Para Yatır
            </div>
          </Link>
        </div>
        {/* para çek para yatır */}
        {/* son islemler */}
        <div className='d-flex align-items-center justify-content-around gap-5 mt-3'>
          <p className='m-0'>Son İşlemler</p>
          <Link to={""} className='text-white all-islem'>Tümünü Gör</Link>
        </div>
        <div className="linear-line my-3 "></div>
        <div className='mt-2'>
          <div className='d-flex align-items-center justify-content-around gap-5 py-2'>
            <div className='d-flex align-items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <circle cx="11.5" cy="11.5" r="11.5" fill="url(#paint0_linear_2_109)" />
                <defs>
                  <linearGradient id="paint0_linear_2_109" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A7B5FF" />
                    <stop offset="1" stopColor="#F3ACFF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className='d-flex flex-column'>
                <p className='m-0 last-title'>Lorem, ipsum.</p>
                <p className='m-0 last-username'>Melisa Eldem</p>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <p className='m-0 last-price-success'>149.00₺</p>
              <p className='m-0 last-date'>07.04.2025</p>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-around gap-5 py-2'>
            <div className='d-flex align-items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <circle cx="11.5" cy="11.5" r="11.5" fill="url(#paint0_linear_2_109)" />
                <defs>
                  <linearGradient id="paint0_linear_2_109" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A7B5FF" />
                    <stop offset="1" stopColor="#F3ACFF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className='d-flex flex-column'>
                <p className='m-0 last-title'>Lorem, ipsum.</p>
                <p className='m-0 last-username'>Melisa Eldem</p>
              </div>
            </div>
            <div className='d-flex flex-column'>
              <p className='m-0 last-price-danger'>149.00₺</p>
              <p className='m-0 last-date'>07.04.2025</p>
            </div>
          </div>
        </div>
        {/* son islemler */}

        {/*yardım */}
        <div className="linear-line mt-3"></div>
        <div className='d-flex flex-column align-items-center gap-2 my-3'>
          <p className='m-0 text-center help-title'>Herhangi bir sorunla mı <br /> karşılaştınız?</p>
          <p className='m-0 help-text'>İşlemleri yaparken sorun mu yaşıyorsunuz.</p>
        </div>
        <div className="linear-line mt-4"></div>
        <div className='px-4 my-3 d-flex align-items-center justify-content-center'>
          <Button className="w-100 linear-btn">
            <Link to={""} className='text-black fw-600 text-decoration-none text-nowrap'>İletişime Geç</Link>
          </Button>
        </div>
        {/*yardım */}

      </div>
    </div>
  )
}

export default Sidebar