import React from 'react'
import './Footer.scss'

import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

import { FaFacebookF , FaInstagram , FaTelegramPlane ,FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="top">
          <li className='list'>
            <div className="list__logo">
              <Link to='/' className='logo'>Real<span>DAY</span></Link>
            </div>
            <Link to='Registratsiya'>
              <Button className='btn'>
                <span>Registratsiyadan o'tish</span>
              </Button>
            </Link>
          </li>
          <li className='list'>
            <h5>Aloqa</h5>
            <li>
              <LocalPhoneIcon/>
              <span>+998 91 298 98 08</span>
            </li>
            <li>
              <LocalPhoneIcon/>
              <span>+998 91 298 98 08</span>
            </li>
            <li>
              <MarkEmailUnreadIcon/>
              <span>info@tantana.uz</span>
            </li>
            <li>
              <MarkEmailUnreadIcon/>
              <span>info@tantana.uz</span>
            </li>
            <li>
              <div className="list">
                <Link className='icons' to='https://www.facebook.com/'>
                  <FaFacebookF className='icon'/>
                </Link>
                <Link className='icons' to='https://www.instagram.com/'>
                  <FaInstagram className='icon'/>
                </Link>
                <Link className='icons' to='https://www.youtube.com/'>
                  <FaYoutube className='icon'/>
                </Link>
                <Link className='icons' to='https://telegram.org/'>
                  <FaTelegramPlane className='icon' />
                </Link>
              </div>
            </li>
          </li>
          <li className='list'>
            <h5>Xizmatlar</h5>
            <div className="links">
              <Link className='link'>
                To’y liboslari
              </Link>
              <Link className='link'>
                Taklifnomalar
              </Link>
              <Link className='link'>
                Foto va video
              </Link>
              <Link className='link'>
                San’atkolar
              </Link>
              <Link className='link'>
                Love Story
              </Link>
            </div>
          </li>
          <li className='list'>
            <h5>Bo’limlar</h5>
            <div className="links">
              <Link className='link'>
                Asal oyi
              </Link>
              <Link className='link'>
                Fotolar
              </Link>
              <Link className='link'>
                Takliflar
              </Link>
              <Link className='link'>
                Biz haqimizda
              </Link>
              <Link className='link'>
                Kredit turlari
              </Link>
            </div>
          </li>
        </div>
        <div className="bottom">
          <p>
            2023-yil
          </p>
          <p>
            Asadbek tomonidan Ishlab chiqilgan 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer