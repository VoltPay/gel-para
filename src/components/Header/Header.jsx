import React, { useState } from 'react'
import "./Header.css"
import { Link, useLocation } from 'react-router-dom'
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { FaRegMoon } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiMenu3Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion'
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

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto" },
  };
  const menuVariants1 = {
    hidden: { opacity: 0, y: -10, pointerEvents: "none" },
    visible: { opacity: 1, y: 0, pointerEvents: "auto" },
  };

  return (
    <div className='' >
      <div className=' header-content px-lg-5 px-1'>
        {/* web header */}
        <div className='d-lg-flex d-none align-items-center justify-content-lg-between justify-content-center px-3 flex-wrap'>
          {/* logo */}
          <Link to={"/home"} className='text-white'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 227 48" fill="none">
                <g clip-path="url(#clip0_214_826)">
                  <path d="M13.4667 2.13334C11.2 3.86667 10 4 9.6 2.93334C9.33333 2 7.06667 1.33334 4.53333 1.33334H0V24.6667V48H4.66667H9.33333V38.6667C9.33333 29.4667 10 27.8667 12.9333 30.8C15.2 33.0667 23.3333 32.8 27.0667 30.2667C34 25.7333 35.0667 11.6 28.9333 4.66667C25.0667 0.133336 17.7333 -0.93333 13.4667 2.13334ZM21.3333 10.6667C24.5333 13.8667 24.6667 17.0667 21.8667 21.0667C18.1333 26.4 9.33333 23.2 9.33333 16.4C9.33333 12.9333 13.6 8 16.6667 8C17.7333 8 19.8667 9.2 21.3333 10.6667Z" fill="currentColor" />
                  <path d="M44.1333 1.86668C39.4666 4.40001 37.4666 9.06668 37.3333 16.9333C37.3333 28.8 45.7333 35.4667 55.6 31.3333C58 30.2667 60 30 60 30.8C60 31.4667 62.1333 32 64.6666 32H69.3333V16.6667V1.33335H64.6666C62.1333 1.33335 60 1.86668 60 2.53335C60 3.33335 58.4 2.93335 56.4 1.86668C51.8666 -0.399987 48.2666 -0.399987 44.1333 1.86668ZM57.0666 10.1333C60.4 12.4 61.2 19.6 58.4 22.4C56.4 24.4 50.2666 24.4 48.2666 22.4C45.4666 19.6 46.2666 12.4 49.6 10.1333C51.2 8.93335 52.9333 8.00001 53.3333 8.00001C53.7333 8.00001 55.4666 8.93335 57.0666 10.1333Z" fill="currentColor" />
                  <path d="M97.4667 2.93327C96.8 4.6666 95.3334 8.53327 94 11.5999C91.8667 16.7999 91.8667 17.4666 94.2667 22.6666L96.6667 28.2666L102.4 15.0666C105.467 7.8666 108 1.59993 108 0.933267C108 0.399933 105.867 -6.65784e-05 103.333 -6.65784e-05C99.6 -6.65784e-05 98.4 0.6666 97.4667 2.93327Z" fill="currentColor" />
                  <path d="M127.067 2C124.667 3.06667 122.667 3.33333 122.667 2.66667C122.667 1.86667 120.533 1.33333 118 1.33333H113.333V16.6667V32H118H122.667V21.6C122.667 10.6667 123.867 8 128.667 8C133.467 8 134.667 10.6667 134.667 21.6V32H139.333H144V20.1333C144 9.6 143.6 7.73333 141.067 4.8C137.2 0.533332 132.4 -0.400002 127.067 2Z" fill="currentColor" />
                  <path d="M158.667 1.73334C148.667 5.2 146.267 20.9333 154.533 28.2667C157.867 31.3333 160 32 165.2 32C170.8 32 172.4 31.3333 176.133 27.6L180.533 23.3333L176 22.9333C173.6 22.6667 170.133 23.2 168.4 24.1333C164.8 26.1333 158.667 24 158.667 20.6667C158.667 19.0667 160.667 18.6667 169.333 18.6667H180V14.2667C180 8.66667 176.8 4.26667 171.2 1.86667C166 -0.399998 164.8 -0.399998 158.667 1.73334ZM168.533 8.8C169.733 9.2 170.667 10.4 170.667 11.4667C170.667 12.8 168.933 13.3333 164.667 13.3333C158.533 13.3333 157.467 12.4 160.267 9.6C162 7.86667 165.2 7.6 168.533 8.8Z" fill="currentColor" />
                  <path d="M215.6 4.6667C214.933 8.93337 218.8 24.2667 221.2 27.0667C221.733 27.6 222.933 22.5334 223.867 15.7334C224.8 8.93337 225.867 2.6667 226.267 1.73337C226.8 0.533367 225.467 3.31729e-05 221.6 3.31729e-05C216.667 3.31729e-05 216.267 0.2667 215.6 4.6667Z" fill="currentColor" />
                  <path d="M76.1333 8.26666C77.6 12.1333 81.8666 22.6667 85.6 31.6L92.2666 48H97.4666H102.667L100 41.6C98.6666 38.1333 94.4 27.7333 90.5333 18.2667L83.6 1.33333H78.5333H73.3333L76.1333 8.26666Z" fill="currentColor" />
                  <path d="M186 9.6C194.667 32.6667 193.867 31.3333 199.467 31.3333C204.533 31.3333 204.667 31.2 205.067 26.2667C205.6 19.8667 207.467 20 209.467 26.6667C210.933 31.6 211.467 32 216.133 32H221.2L218 24.2667C216.4 20.1333 213.867 13.2 212.533 8.93333L210.133 1.33333H204.4H198.667V6.66667C198.667 9.6 198.133 12 197.6 12C196.933 12 195.733 9.6 194.8 6.66667C193.333 1.6 192.933 1.33333 188 1.33333H182.8L186 9.6Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_214_826">
                    <rect width="226.667" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
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
            <div className="dropdown-wrapper position-relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <span className="header-link dropdown-toggle">Banka İşlemleri</span>

              <AnimatePresence>
                {open && (
                  <motion.div
                    className="dropdown-menu-custom"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/give-money">Para İste</Link>
                    <Link to="/withdraw-money">Para Çek</Link>
                    <Link to="/deposit-money">Para Yatır</Link>
                    <Link to="/iban-money">IBAN'a Gönder</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* links */}
          {/* icons */}
          <div className='d-flex align-items-center gap-3'>
            <Link to={"/help"}>
              <div className='icon-bg'><IoIosHelpCircleOutline size={29} />
              </div>
            </Link>
            <div>
              <button className="border-0 icon-bg" onClick={toggleTheme}>
                <FaRegMoon size={19} />
              </button>
            </div>
            <div className="dropdown-wrapper position-relative z-5" onMouseEnter={() => setOpen1(true)} onMouseLeave={() => setOpen1(false)}>
              <span className="header-link dropdown-toggle icon-bg"></span>
              <AnimatePresence>
                {open1 && (
                  <motion.div
                    className="dropdown-menu-custom"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants1}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/profile" className="text-nowrap">Profilim</Link>
                    <Link to="/security" className="text-nowrap">Güvenlik</Link>
                    <Link to="/payment-method" className="text-nowrap">Ödeme Yönetmleri</Link>
                    <Link to="/notifications" className="text-nowrap">Bildirimler</Link>
                    <Link to="/help" className="text-nowrap">Yardım mı lazım?</Link>
                    <Link to="/exit" className="text-nowrap">Çıkış Yap</Link>
                  </motion.div>
                )}
              </AnimatePresence>
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
