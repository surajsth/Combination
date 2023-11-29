import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Calculator() {
    const [result, setResult] = useState("")

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1))
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (err) {
            setResult("Err")
        }
    }
    return (
        <>
            <div className="calculator">
                <div className="card w-25 position-absolute top-50 start-50 translate-middle" style={{
                    border: "7px solid black"
                }}>
                    <form>
                        <input type="text" value={result} />
                    </form>
                    <div className="keypad p-2">
                        <button className='btn btn-primary mx-1 my-1' onClick={clear}>Clear</button>
                        <button className='btn btn-primary mx-1 my-1' onClick={backspace}>C</button>
                        <button className='btn btn-primary mx-1 my-1' name='/' onClick={handleClick}>&divide;</button>
                        <button className='btn btn-primary mx-1 my-1' name='7' onClick={handleClick}>7</button>
                        <button className='btn btn-primary mx-1 my-1' name='8' onClick={handleClick}>8</button>
                        <button className='btn btn-primary mx-1 my-1' name='9' onClick={handleClick}>9</button>
                        <button className='btn btn-primary mx-1 my-1' name='*' onClick={handleClick}>&times;</button>
                        <button className='btn btn-primary mx-1 my-1' name='4' onClick={handleClick}>4</button>
                        <button className='btn btn-primary mx-1 my-1' name='5' onClick={handleClick}>5</button>
                        <button className='btn btn-primary mx-1 my-1' name='6' onClick={handleClick}>6</button>
                        <button className='btn btn-primary mx-1 my-1' name='-' onClick={handleClick}>&ndash;</button>
                        <button className='btn btn-primary mx-1 my-1' name='1' onClick={handleClick}>1</button>
                        <button className='btn btn-primary mx-1 my-1' name='2' onClick={handleClick}>2</button>
                        <button className='btn btn-primary mx-1 my-1' name='3' onClick={handleClick}>3</button>
                        <button className='btn btn-primary mx-1 my-1' name='+' onClick={handleClick}>+</button>
                        <button className='btn btn-primary mx-1 my-1' name='0' onClick={handleClick}>0</button>
                        <button className='btn btn-primary mx-1 my-1' name='.' onClick={handleClick}>.</button>
                        <button className='btn btn-primary mx-1 my-1' onClick={calculate}>=</button>

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

export default Calculator