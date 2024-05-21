import React from 'react'
import { NavLink } from 'react-router-dom'
import "../header/Header.scss"

const Header = () => {
  return (
    <header>
        <div className='header-left'>
            <h2>FOUNDATION</h2>
        </div>
        <div className='header-right'>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'} style={{textDecoration : "none", color: "black"}}>Home</NavLink>
                    </li>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Donate</li>
                    <li> Blog</li>
                    <li> Contact</li>
                    <li>
                        <NavLink to={'/post'} style={{textDecoration : "none", color: "black"}}>Post</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/basket'} style={{textDecoration : "none", color: "black"}}>Basket</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header