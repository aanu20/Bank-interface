import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';  // <-- Import LoginPage
function App() {

  return (
    <>

      <div className="min-h-screen w-full bg-gradient-to-br from-violet-200 to-blue-400 text-black p-4">
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
