import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';  // <-- Import LoginPage
function App() {

  return (
    <>

      <div className="min-h-screen w-full bg-black text-white p-4">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} /> {/* <-- Corrected */}
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
