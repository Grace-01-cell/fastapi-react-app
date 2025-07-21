import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Introduction from './Intro'
import Details from './Details'  // ✅ Use only this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />  {/* Let App handle nested routes */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
