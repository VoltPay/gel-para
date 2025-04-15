import React, { useState } from 'react'
import "./Header.css"
import { Link, useLocation } from 'react-router-dom'
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { FaRegMoon } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiMenu3Line } from 'react-icons/ri';

function Header() {
  // offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // offcanvas
  // link
  const location = useLocation();
  const links = [
    { label: "Anasayfa", path: "/" },
    { label: "İşlemlerim", path: "/transactions" },
    { label: "Para Talep Et", path: "/request-money" },
    { label: "Para Gönder", path: "/send-money" },
  ];
  // link
  // theme control
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    console.log("açık")
  };
  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);
  // theme control

  return (
    <div>
      <div className=' header-content px-lg-5 px-1'>
        {/* web header */}
        <div className='d-lg-flex d-none align-items-center justify-content-lg-between justify-content-center px-3 flex-wrap'>
          {/* logo */}
          <Link to={"/home"}>
            <img src="../src/assets/img/logo.png" alt="" />
          </Link>
          {/* logo */}
          {/* links */}
          <div className='d-flex align-items-center gap-3 header-links'>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`header-link ${location.pathname === link.path ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="dropdown-wrapper z-5">
              <span className="header-link dropdown-toggle">Banka İşlemleri</span>
              <div className="dropdown-menu">
                <Link to="/send-money">Para Gönder</Link>
                <Link to="/give-money">Para İste</Link>
                <Link to="/withdraw-money">Para Çek</Link>
                <Link to="/deposit-money">Para Yatır</Link>
                <Link to="/iban-money">IBAN'a Gönder</Link>
              </div>
            </div>
          </div>
          {/* links */}
          {/* icons */}
          <div className='d-flex align-items-center gap-3'>
            <Link to={""}>
              <div className='icon-bg'><IoIosHelpCircleOutline size={29} />
              </div>
            </Link>
            <div>
              <button className="border-0 icon-bg" onClick={toggleTheme}>
                <FaRegMoon size={19} />
              </button>
            </div>
            <div className="dropdown-wrapper z-5">
              <span className="header-link dropdown-toggle icon-bg"><img src="" alt="" /></span>
              <div className="dropdown-menu">
                <Link to="/banka/havale">Havale</Link>
                <Link to="/banka/eft">EFT</Link>
                <Link to="/banka/kur">Döviz Kurları</Link>
              </div>
            </div>
          </div>
          {/* icons */}
        </div>
        {/* web header */}
        {/* mobile header */}
        <div className="d-lg-none d-flex align-items-center justify-content-between px-4">
          {/* logo */}
          <Link to={"/home"}>
            <img src="../src/assets/img/logo.png" alt="" />
          </Link>
          {/* logo */}
          <div>
            <Button variant="border-0 transparent text-white" onClick={handleShow}>
              <RiMenu3Line size={29} />
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='end' className="card-bg">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  {/* logo */}
                  <Link to={"/home"}>
                    <img src="../src/assets/img/logo.png" alt="" />
                  </Link>
                  {/* logo */}</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* links */}
                <div className='d-flex align-items-start justify-content-center gap-3 flex-column header-links'>
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`header-link ${location.pathname === link.path ? "active text-start" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="dropdown-wrapper">
                    <span className="header-link dropdown-toggle">Banka İşlemleri</span>
                    <div className="dropdown-menu">
                      <Link to="/banka/havale">Havale</Link>
                      <Link to="/banka/eft">EFT</Link>
                      <Link to="/banka/kur">Döviz Kurları</Link>
                    </div>
                  </div>
                </div>
                {/* links */}
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
        {/* mobile header */}
      </div>
    </div>
  )
}

export default Header;
