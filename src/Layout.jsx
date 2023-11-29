import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
    return (
        <div className='layout text-white p-4'>
            <button className='bg-btn btn btn-success'>

                <Link className='link' to="/quiz">
                    Quiz</Link>
            </button>
            <button className='bg-btn1 btn btn-success'>

                <Link className='link' to="/generate">
                    Generator</Link>
            </button>
            <button className='bg-btn2 btn btn-success'>

                <Link className='link ' to="/calculate">
                    Calculate</Link>
            </button>
        </div>
    )
}

export default Layout