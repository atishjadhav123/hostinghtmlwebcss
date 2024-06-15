import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [stycky, setStycky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setStycky(true) : setStycky(false)
        })
    }, [])

    const [mobaiMenu, setMobaileMenu] = useState(false)
    const ToggleMenu = () => {
        mobaiMenu ? setMobaileMenu(false) : setMobaileMenu(true)
    }
    return <>
        <nav className={`container ${stycky ? 'dark-nav' : ''}`}>
            <img src="src/assets/logo.png.png" alt="" height={50} className='logo' />
            <ul className={mobaiMenu ? '' : 'hide-mobail-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testymonials</Link></li>
                <li><Link><button className='btn'>Contact us</button></Link></li>
            </ul>
            <img src="src/assets/menu.svg" alt="" className='menu-icon' onClick={ToggleMenu} />
        </nav>
    </>
}

export default Navbar