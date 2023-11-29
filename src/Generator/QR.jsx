import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';

function QR() {
    const [inputValue, setInputValue] = useState('');
    const [generatedQR, setGeneratedQR] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleGenerateQR = (e) => {
        e.preventDefault()
        if (inputValue) {
            setGeneratedQR(<QRCode value={inputValue} size={256} bgColor="#ffffff" fgColor="#000000" />);
        }
    };
    return (
        <div className="qr-code-generator">
            <div className="  text-white  position-absolute top-50 start-50 translate-middle p-4 " style={{
                // mixBlendMode: "screen",
            }}>
                <form onSubmit={handleGenerateQR} className='p-4 ' >
                    <label className='mt-3 '>Enter value to generate QR code:</label><br />
                    <input className='mt-3' type="text" value={inputValue} onChange={handleInputChange} /><br />
                    <button className='mt-3 btn btn-success' type="submit">Generate QR Code</button>
                </form>

                <div className="d-flex justify-content-center bg-secondary p-3">
                    {generatedQR}
                </div>
            </div>
            <div>
                <button className='btn btn-secondary position-absolute start-0 mt-4 mx-4' style={{
                    // mixBlendMode: "multiply"
                }}>
                    <Link className='text-white text-decoration-none' to="/">Home</Link>
                </button>
                <button className='btn btn-secondary position-absolute end-0  mt-4 mx-4' style={{
                    // mixBlendMode: "multiply"
                }}>
                    <Link className='text-white text-decoration-none' to="/generate">Generation Page</Link>
                </button>
            </div>
        </div>
    )
}

export default QR