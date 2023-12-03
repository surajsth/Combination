import React from 'react'
import { Link } from 'react-router-dom';

function BirthDatecal() {
    const handleAge = () => {
        var d1 = document.getElementById('date').value;
        var m1 = document.getElementById('month').value;
        var y1 = document.getElementById('year').value;
        var date = new Date();
        var d2 = date.getDate();
        var m2 = 1 + date.getMonth();
        var y2 = date.getFullYear();
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (d1 > d2) {
            d2 = d2 + month[m2 - 1];
            m2 = m2 - 1;
        }

        if (m1 > m2) {
            m2 = m2 - 12;
            y2 = y2 - 1;
        }

        var d = d2 - d1;
        var m = m2 - m1;
        var y = y2 - y1;

        document.getElementById('age').innerHTML = 'Your age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
    }
    return (
        <>
            <div className="birth">
                <div className='card position-absolute top-50 start-50 translate-middle p-4 w-50 bg-secondary' style={{
                    mixBlendMode: "difference",
                }}>
                    <h2 className='text-center text-white'>Age Calculator</h2>
                    <div className="block">
                        <p className="title text-white text-bold">Date</p>
                        <input type="text" className="date" id="date" placeholder='Date' minLength={1} maxLength={2} required />
                    </div>
                    <div className="block">
                        <p className="title ">Month</p>
                        <input type="text" className="month" id="month" placeholder='Month' minLength={1} maxLength={2} required />
                    </div>
                    <div className="block">
                        <p className="title">Year</p>
                        <input type="text" className="year" id="year" placeholder='Year' minLength={1} maxLength={4} required />
                    </div>
                    <div className="base">
                        <input className="btn btn-success mt-4" type="submit" value="Submit" onClick={handleAge} />
                    </div>
                    <div className="age text-center text-white" id="age" style={{
                        fontSize: "25px",
                        backgroundColor: "black"
                    }}>

                    </div>
                </div>
                <div>
                    <button className='btn btn-secondary position-absolute start-0 mt-4 mx-4' >
                        <Link className='text-white text-decoration-none' to="/">Home</Link>
                    </button>
                    <button className='btn btn-secondary position-absolute end-0  mt-4 mx-4' >
                        <Link className='text-white text-decoration-none' to="/calculate">Calculate Page</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BirthDatecal