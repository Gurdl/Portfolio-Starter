import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
function Navbar() {
    return (
        <div className='nav-wrapper' id='Navbar'>
            <div className='nav-left'>
                <div className='nav-name'>Gurdev</div>
                <Toggle></Toggle>
            </div>
            <div className="nav-right">
                <ul className="nav-list">
                    <li><Link spy={true} smooth={true} to={'Intro'}>
                        HOME
                    </Link></li>
                    <li><Link spy={true} smooth={true} to={'Works'}>
                       WORKS
                    </Link></li>
                    <li><Link spy={true} smooth={true} to={'Portfolio'}>
                        PROJECTS
                    </Link></li>
                    <li><Link spy={true} smooth={true} to={'Services'}>
                       SERVICES
                    </Link></li>
                    <li><Link spy={true} smooth={true} to={'Testimonials'}>
                       TESTIMONIAL
                    </Link></li>
                    <button type='button' className='button nav-button'><Link spy={true} smooth={true} to={'contacts'}>Contact Us</Link></button>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
