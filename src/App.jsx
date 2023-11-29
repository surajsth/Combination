import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './Quiz/Quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Technology from './Quiz/field/Technology';
import Layout from './Layout';
import Generator from './Generator/Generator';
import Quote from './Generator/Quote';
import Password from './Generator/Password';
import QR from './Generator/QR';
import Calculate from './Calculate/Calculate';
import Calculator from './Calculate/Calculator';
import BirthDatecal from './Calculate/BirthDatecal';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Layout />} />
          <Route path='/quiz' element={< Quiz />} />
          <Route path='/generate' element={< Generator />} />
          <Route path='/quote' element={< Quote />} />
          <Route path='/password' element={< Password />} />
          <Route path='/qr' element={< QR />} />
          <Route path='/calculate' element={< Calculate />} />
          <Route path='/calculator' element={< Calculator />} />
          <Route path='/birth' element={< BirthDatecal />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
