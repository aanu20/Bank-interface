import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';  // <-- Import LoginPage
import CreateAccount from './CreateAccount';
import SendMoney from './SendMoney';
import TranscationHistory from './TranscationHistory';
import TranscationReceipt from './TranscationReceipt';
import TransferToAccount from './TransferToAccount';
import DepoistSelf from './DepoistSelf';
import AddAccount from './AddAccount';
import QRScanner from './QrScan';
import EnterPin from './EnterPin';
import PaymentEnterPin from './PayementEnterPin';
import TransactionSuccess from './TransactionSuccess';
import ConfirmPayment from './ConfirmPayment';
import MakePayment from './MakePayment';
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
          <Route path='/transcation-success' element={<TranscationReceipt/>}/>
          <Route path='/to-account' element={< TransferToAccount/>}/>
          <Route path='/depoist' element={< DepoistSelf/>} />
          <Route  path='/depoist/select' element={<AddAccount />}/>
          <Route path ='/QR-scan' element={<QRScanner/>}/>
          <Route path='/makepayment' element={<MakePayment/>}/>
          <Route path='/confirm-payment' element={<ConfirmPayment/>}/>
          <Route path='/enter-pin' element={<EnterPin/>}/>
          <Route path='/transaction-success-pin' element={< TransactionSuccess/>}/>
          
          <Route path='/make-payment' element={<PaymentEnterPin/>}/>
          
          
          
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
