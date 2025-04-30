import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';  // <-- Import LoginPage
import CreateAccount from './CreateAccount';
import SendMoney from './SendMoney';
import TranscationHistory from './TranscationHistory';
import TranscationReceipt from './TranscationReceipt';
function App() {

  return (
    <>

      <div className="min-h-screen w-full text-black p-4">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} /> {/* <-- Corrected */}
          <Route path="/create-account" element={ <CreateAccount/>}/>
          <Route path='/send-money' element={<SendMoney/>} />
          <Route path='/Sendhistory' element={< TranscationHistory/>} />
          <Route path='transcation-success' element={<TranscationReceipt/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
