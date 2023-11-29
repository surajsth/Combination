import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css"

function Generator() {
    return (
        <div className='generate'>
            <button className='bg-btn'>
                <Link className='text-decoration-none text-white' to="/quote">Quote Generator</Link><br />
            </button>
            <button className='bg-btn1'>

                <Link className='text-decoration-none text-white' to="/password">Password Generator</Link><br />
            </button>
            <button className='bg-btn2'>
                <Link className='text-decoration-none text-white' to="/qr">Qr Generator</Link>
            </button>
            <div>
                <button className='btn btn-primary position-absolute start-0 mt-4 mx-4 text-white' style={{
                    mixBlendMode: "screen"
                }}>
                    <Link className='text-white text-decoration-none' to="/">Home</Link>
                </button>

            </div>
        </div>
    )
}

export default Generator