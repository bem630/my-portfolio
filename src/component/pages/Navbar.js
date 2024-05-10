import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaList, FaLayerGroup, FaComments } from "react-icons/fa";
import '../../style/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <Link>Bem<span>dev</span></Link>
        </div>
        <ul className="navbar-right">
            <li>
                <Link to='/' className='active'><FaHome className='icon'/>Home</Link>
            </li>
            <li>
                <Link to='/about'><FaUser className='icon'/>About</Link>
            </li>
            <li>
                <Link to='/services'><FaList className='icon'/>Services</Link>
            </li>
            <li>
                <Link to='/projets'><FaLayerGroup className='icon'/>Projets</Link>
            </li>
            <li>
                <Link to='/contact'><FaComments className='icon'/>Contact</Link>
            </li>
        </ul>
    </div>
  )
}
