import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignUp from './signUp.jsx'
import Navbar from './navbar.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <SignUp />
  </React.StrictMode>,
)
