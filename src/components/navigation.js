import * as React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'gatsby'
import logo from '../images/Stuft.png'
import {
  nav_list,
  log_in,
  nav_img,
  navbar1,
  navbar2
} from './navigation.module.css'

import "./navigation.module.css"

const Navigation = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    
    <nav className='nav'>
        <div className = {navbar ? navbar1 : navbar2}>
            <Link className = {nav_img} to="/"><img src={logo} alt='logo' height='30px'/></Link>
            <ul className = {nav_list}>
                {/*<li><Link to="/product">Product</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link className={log_in} to="/login">Login</Link></li>*/}
                <li><Link to="/getstarted"><button>Get started</button></Link></li>
            </ul>
        </div>
    </nav>
    

  )
}

export default Navigation