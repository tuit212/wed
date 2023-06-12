import React from 'react'
import './Navbar.scss'
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom'

// icons
import { BsGlobe } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// import logo from '../Assets/images/wedLogo.svg'

const Navbar = () => {
  return (
    <div className="header">
        {/* logo */}
        <div className="header__logo">
            <Link to='/' className='logo'>Real<span>DAY</span></Link>
        </div>
        {/* navbar */}
        <nav className='header__nav'>
            <NavLink className='link' to="Katalog">Katalog</NavLink>
            <NavLink className='link' to="Menenjer">Menenjer</NavLink>
            <NavLink className='link' to="Kredit">Kredit</NavLink>
            <NavLink className='link' to="Asal oyi">Asal oyi</NavLink>
            <NavLink className='link' to="Portfolio">Portfolio</NavLink>
            <NavLink className='link' to="Aloqa">Aloqa</NavLink>
        </nav>
        {/* login */}
        <div className="wrapper">
            <div className="translate">
                <BsGlobe className='globe'/>
                <p className='text'>uz</p>
                <KeyboardArrowDownIcon className='bottom'/>
            </div>
            <div className="enter">
                <Link className='btns' to='enter'>
                    <Button className='btn-e'>
                        <span>Kirish</span>
                    </Button>
                </Link>
                <Link className='btns' to='Registratsiya'>
                    <Button className='btn-e regis'>
                        <FaUser className='user'/>
                        <span>Registratsiya</span>
                    </Button>
                </Link>
            </div>

            {/* btn */}
            <div className="btn">
                <HiOutlineBars3BottomRight className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar