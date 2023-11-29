import React from 'react'
import Calculator from './Calculator'
import { Link } from 'react-router-dom';

function Calculate() {
    return (
        <div className='calculate'>

            <button className='btn btn-secondary position-absolute start-0 mt-4 mx-4' >
                <Link className='text-white text-decoration-none' to="/">Home</Link>
            </button>

            <button className='btn btn-secondary bg-btn '>
                <Link className='text-decoration-none text-white' to="/calculator">Calculator</Link>
            </button>
            <button className='btn btn-secondary bg-btn1 '>
                <Link className='text-decoration-none text-white' to="/birth">Birth Calculate</Link>
            </button>
        </div>
    )
}

export default Calculate