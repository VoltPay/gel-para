import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { PiYoutubeLogoLight } from 'react-icons/pi'

function Footer() {
  return (
    <div className='px-5'>
      <div className='mt-5 '>
        <div className='d-flex align-items-lg-center justify-content-lg-between justify-content-center flex-wrap gap-lg-0 gap-4'>
          {/* links */}
          <div className='d-flex align-items-center gap-3'>
            <Link to={""} className='text-decoration-none text-white footer-link-text'>Güvenlik</Link>
            <Link to={""} className='text-decoration-none text-white footer-link-text'>Kullanım Koşulları</Link>
            <Link to={""} className='text-decoration-none text-white footer-link-text'>Gizlilik</Link>
          </div>
          {/* links */}

          {/* text */}
          <div>
            <p className='m-0 copyright-text'>Copyright 2025 Tüm Hakları Saklıdır.</p>
          </div>
          {/* text */}

          {/* icon */}
          <div className='d-flex align-items-center gap-3'>
            <Link to={""} className='icon-bg'><FaInstagram size={22} /></Link>
            <Link to={""} className='icon-bg'><CiFacebook size={22} /></Link>
            <Link to={""} className='icon-bg'><CiLinkedin size={22} /></Link>
            <Link to={""} className='icon-bg'><PiYoutubeLogoLight size={22} /></Link>
          </div>
          {/* icon */}
        </div>
      </div>
    </div>
  )
}

export default Footer