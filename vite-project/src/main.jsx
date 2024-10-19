import { React } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'  
import './style/main.css'
// import './assets/scss/main.scss'

createRoot(document.querySelector('.wrapper')).render(<App/>)
    