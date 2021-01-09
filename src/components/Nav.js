import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import homeImg from '../img/home.png'
import activeHomeImg from '../img/active-home.png'

import userImg from '../img/user.png'
import activeUserImg from '../img/active-user.png'

import settingsImg from '../img/settings.png'
import activeSettingsImg from '../img/active-settings.png'

import viewImg from '../img/view.png'
import activeViewImg from '../img/active-view.png'

import mailImg from '../img/mail.png'
import activeMailImg from '../img/active-mail.png'

import logo from '../img/Logo.png'

export const Nav = (props) => {

  const [page, setPage] = useState('/');
  // const [widthPage, setWidthPage] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    setInterval(() => {
      if (page !== document.location.pathname) {
        setPage(document.location.pathname)
      }
    })

    // setInterval(() => {
    //   if (widthPage !== document.documentElement.clientWidth) {
    //     setWidthPage(document.documentElement.clientWidth)
    //     console.log(widthPage);
    //   }
    // })

    
  })

  return (
    <div className = 'navigation'>
      <div className="logo">
        <img src = { logo } alt=""/>
        <span> Max </span>
      </div>

      <nav className="nav">
        <Router>

          <Link to='/' className="nav__item">
            <img src = { document.location.pathname === '/' ? activeHomeImg : homeImg } alt=""/>
          </Link>

          <Link to='/about' className="nav__item">
            <img src = { document.location.pathname === '/about' ? activeUserImg : userImg } alt=""/>
          </Link>

          <Link to='/skills' className="nav__item">
            <img src = { document.location.pathname === '/skills' ? activeSettingsImg : settingsImg } alt=""/>
          </Link>

          <Link to='/my-work' className="nav__item">
            <img src = { document.location.pathname === '/my-work' ? activeViewImg : viewImg } alt=""/>
          </Link>

          <Link to='/contact' className="nav__item">
            <img src = { document.location.pathname === '/contact' ? activeMailImg : mailImg } alt=""/>
          </Link>

        </Router>
      </nav>

      <div className="social-link">
        <Router>
          <a href = 'https://github.com/Maxim-rrrr' className="social-link__item"/>
          <a href = 'https://vk.com/id229541164' className="social-link__item"/>
          <a href = 'mailto:kewin.rrrr@gmail.com' className="social-link__item"/>
        </Router>
      </div>
    </div>
  )
}