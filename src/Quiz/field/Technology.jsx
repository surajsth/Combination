import React, { useState } from 'react'
import QuizData from '../Question/TechnologyQ';
import "../../App.css"
function Technology() {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [clickoption, setClickoption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const changeQuestion = () => {
        updateScore();
        if (current < QuizData.length - 1) {
            setCurrent(current + 1);
            setClickoption(0);
        }
        else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickoption === QuizData[current].correct) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrent(0);
        setClickoption(0);
        setScore(0);
    }
    return (
        <>
            <div className='technology'>
                <div className="  container d-flex justify-content-center align-items-center ">

                    <div className=" mt-5 p-4 w-50" id="quiz">
                        {showResult ? (
                            <>
                                <h1 className='text-#27171a text-center' style={{ marginTop: "35%" }}> Your Score: {score}</h1>
                                <h1 className='text-#27171a text-center'>Total Score: {QuizData.length}</h1>
                                <button className='btn btn-success w-100' onClick={resetAll}
                                    style={{
                                        padding: "0.5rem 1rem",
                                        mixBlendMode: "screen"
                                    }}
                                >Try Again</button>
                            </>

                        ) : (
                            <div className="quiz-header">
                                <h2 className='text-center text-white mt-5' id="question">{QuizData[current].question}</h2>
                                <div className="container">
                                    {QuizData[current].options.map((option, i) => {
                                        return (
                                            <button
                                                className={`w-100 my-2 btn btn-primary ${clickoption === i + 1 ? "checked" : null
                                                    }`}
                                                key={i}
                                                onClick={() => setClickoption(i + 1)}
                                                style={{
                                                    padding: "0.5rem 1rem",
                                                    mixBlendMode: "screen"
                                                }}
                                            >
                                                {option}
                                            </button>
                                        )
                                    })}
                                    <button
                                        style={{
                                            padding: "0.5rem 1rem",
                                            mixBlendMode: "screen"
                                        }}
                                        className='btn btn-success w-100 my-4' onClick={changeQuestion}>Submit</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technology