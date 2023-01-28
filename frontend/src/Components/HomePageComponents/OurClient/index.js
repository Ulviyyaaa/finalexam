import React from 'react'
import "./index.scss"

function OurClient() {
    return (
        <div className='mainClient'>
            <div className='clientWord'>
                <h3>What our Client’s Say about us</h3>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className='cardClient'>
                {/* <div className='cardIn'> */}
                <div className='oneCard'>
                    <div className='twoo'>
                        <img src='https://preview.colorlib.com/theme/plumber/img/t1.png.webp' alt='img'></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h4>Mark Alviri Wiens</h4>
                        <p>CEO at Google</p>
                    </div>
                </div>
                <div className='oneCard'>
                    <div className='twoo'>
                        <img src='https://preview.colorlib.com/theme/plumber/img/t2.png.webp' alt='img'></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h4>Mark Alviri Wiens</h4>
                        <p>CEO at Google</p>
                    </div>
                </div>
                <div className='oneCard'>
                    <div className='twoo'>
                        <img src='https://preview.colorlib.com/theme/plumber/img/t3.png.webp' alt='img'></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h4>Mark Alviri Wiens</h4>
                        <p>CEO at Google</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default OurClient