import React from 'react'
import './header.scss'
import { Person, Mail } from '@material-ui/icons'
function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className={'header ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            MR
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+44 7586 260 536</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>letter2maha@gmail.com</span>
          </div>
        </div>

        <div className='right'>
          <div
            className='hamburger'
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
