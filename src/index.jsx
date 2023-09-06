import React from 'react'
import { createRoot } from 'react-dom/client' // importez createRoot depuis react-dom/client
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Campagnes from './pages/Campagnes'
import Header from './components/Header'
import Error from './components/Error'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/campagnes" element={<Campagnes />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
