import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Equipamento from './pages/Equipamentos/index.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='Equipamento' element={<Equipamento/>} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
