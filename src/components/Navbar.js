import React from 'react'
import { pageLinks } from '../data'
import Logo from '../images/logo.svg'

export default function NavBar() {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={Logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
       
        <ul class="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return(
                <li key={link.id}>
                  <a href={link.href} className='nav-link'>
                    {link.text}
                  </a>
                </li>
              )
          })}                    
        </ul>
      </div>
    </nav>
  )
}
