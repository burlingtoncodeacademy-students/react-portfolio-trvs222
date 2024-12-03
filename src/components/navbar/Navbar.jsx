import React, {useState} from 'react'
import "./NavbarStyles.css"
import { AiFillHome } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar= () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => setNav(!nav)
  return (
    <div className='navbar'>
        <div className="container">
            <div className='logo'>
            <Link to="/"><AiFillHome className="icon" /></Link>
                <h1>Trevor Stokes</h1>
            </div>

            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/hobby">Hobbies</Link></li>
                
                <Link to="/contact"> <button>Contact Me</button></Link>
            </ul>
            <div className='bars' onClick={handleNav}>
                <FaBars className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar