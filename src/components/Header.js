import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes, Router } from 'react-router-dom'
import './stylesheets/customcss/Header.css'
import './stylesheets/css/em-unity-1.7.1.css'
import './stylesheets/css/em-unity-1.7.1.min.css'

function Header() {
  return (
    <div className='header em-c-header__band--theme--blue'>
      <div className='container em-l-container'>
        <div className='header-container'>
          <div className='header-logo'>
            <Link to='/'>
              <h2 className='em-c-header__title'>Smart Locker</h2>
              </Link>
          </div>
          <ul className='menu'>
            <li className='menu-link'>
              <a href='/myitem'>My Item</a>
            </li>
            <li className='menu-link'>
              <Link to='/howto'>How to?</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header