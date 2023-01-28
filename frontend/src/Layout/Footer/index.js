import React from 'react'
import "./index.scss"

function Footer
    () {
    return (
        <div className='mainFoo'>
            <div className='footerr'>
                <div className='lineOne'>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    <br></br>
                    <p>Copyright ©2023 All rights reserved | This template is made with <i style={{color:"red"}} className="fa-regular fa-heart"></i> by <span style={{color:"red"}}>Colorlib</span></p>
                </div>

                <div className='lineTwo'>
                    <h3>Newsletter</h3>
                    <p>Stay update with our latest</p>
                    <input></input>
                </div>

                <div className='lineThree'>
                    <h3>Follow Us</h3>
                    <p>Let us be social</p>
                    <i style={{color:"white"}} className="fa-brands fa-facebook"></i>
                    <i style={{color:"white"}} className="fa-brands fa-twitter"></i>
                    <i style={{color:"white"}} className="fa-thin fa-basketball"></i>
                    <i style={{color:"white"}} className="fa-brands fa-behance"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
