import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Quote() {
    const getRandomQuote = async () => {
        const response = await axios.get('https://api.adviceslip.com/advice');
        const data = response.data;
        return { quote: data.slip.advice, author: data.slip.author };
    };
    const [quote, setQuote] = useState({ quote: '', author: '' });

    useEffect(() => {
        getRandomQuote().then(newQuote => setQuote(newQuote));
    }, []);

    const handleClick = async () => {
        const newQuote = await getRandomQuote();
        setQuote(newQuote);
    };
    return (
        <div className="quote-generator ">
            <div className="card position-absolute top-50 start-50 translate-middle bg-warning " style={{
                mixBlendMode: "multiply",
            }}>
                <div className="quote-container p-4 text-white">
                    <p className="quote ">
                        <h1 className=''>{quote.quote}</h1>
                    </p>
                    {/* <p className="author">- {quote.author}</p> */}
                </div>
                <button className='btn btn-success my-2 mx-2' onClick={handleClick}>Generate New Quote</button>
            </div>
            <div>
                <button className='btn btn-secondary position-absolute start-0 mt-4 mx-4' style={{
                    mixBlendMode: "multiply"
                }}>
                    <Link className='text-white text-decoration-none' to="/">Home</Link>
                </button>
                <button className='btn btn-secondary position-absolute end-0  mt-4 mx-4' style={{
                    mixBlendMode: "multiply"
                }}>
                    <Link className='text-white text-decoration-none' to="/generate">Generation Page</Link>
                </button>
            </div>
        </div>
    )
}

export default Quote