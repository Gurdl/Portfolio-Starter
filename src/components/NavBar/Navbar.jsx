import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='nav-wrapper'>
            <div className='nav-left'>
                <div className='nav-name'>Gurdev</div>
                <label>toggle</label>
            </div>
            <div className="nav-right">
                <ul className="nav-list">
                    <li>HOME </li>
                    <li>ABOUT  </li>
                    <li>PROJECTS  </li>
                    <li>SERVICES </li>
                    <li>TESTINOMIAL </li>
                    <button type='button' className='button nav-button'>Contact Us</button>  
                </ul>

            </div>
        </div>
    )
}

export default Navbar
