import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const generatePassword = (length, options) => {
    const characterSets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()-_+={}[]|\:;"<>,./?',
    };

    let password = '';

    for (let i = 0; i < length; i++) {
        let characterSet;
        if (options.lowercase) {
            characterSet = characterSets.lowercase;
        } else if (options.uppercase) {
            characterSet = characterSets.uppercase;
        } else if (options.numbers) {
            characterSet = characterSets.numbers;
        } else {
            characterSet = characterSets.symbols;
        }

        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
};

const Password = () => {
    const [passwordLength, setPasswordLength] = useState(10);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useUppercase, setUseUppercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(false);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleGeneratePassword = () => {
        const options = {
            lowercase: useLowercase,
            uppercase: useUppercase,
            numbers: useNumbers,
            symbols: useSymbols,
        };

        const newPassword = generatePassword(passwordLength, options);
        setGeneratedPassword(newPassword);
    };

    return (
        <div className="password-generator">
            <div className="card p-4 w-25 text-white position-absolute top-50 start-50 translate-middle bg-dark" style={{
                // mixBlendMode: "screen"
            }}>
                <h2 className='text-center'>Random Password Generator</h2>

                <div className="">

                    <label>Password Length:</label>
                    <input
                        type="number"
                        min={6}
                        value={passwordLength}
                        onChange={(event) => setPasswordLength(parseInt(event.target.value))}
                    />


                    <label>
                        <input
                            type="checkbox"
                            checked={useLowercase}
                            onChange={() => setUseLowercase(!useLowercase)}
                        />
                        Include lowercase letters
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={useUppercase}
                            onChange={() => setUseUppercase(!useUppercase)}
                        />
                        Include uppercase letters
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={useNumbers}
                            onChange={() => setUseNumbers(!useNumbers)}
                        />
                        Include numbers
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            checked={useSymbols}
                            onChange={() => setUseSymbols(!useSymbols)}
                        />
                        Include symbols
                    </label>
                </div>

                <button className='btn btn-success my-2' onClick={handleGeneratePassword}>Generate Password</button>

                <div className="generated-password p-4 text-center">
                    <h1> {generatedPassword}</h1>
                </div>
            </div>
            <div>
                <button className='btn btn-secondary position-absolute start-0 mt-4 mx-4' >
                    <Link className='text-white text-decoration-none' to="/">Home</Link>
                </button>
                <button className='btn btn-secondary position-absolute end-0  mt-4 mx-4' >
                    <Link className='text-white text-decoration-none' to="/generate">Generation Page</Link>
                </button>
            </div>
        </div>
    );
};

export default Password;