import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"

function Navbar() {
    return (
        <div>
            <div className='mainNav'>
                <div className='navLogo'>
                  <img src='https://preview.colorlib.com/theme/plumber/img/logo.png.webp' alt='logo'/>
                </div>
                <div className='navWord'>
                    <Link className='navLi' to={"/"}>Home</Link>
                    <Link className='navLi' to={"/add"}>Add</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar