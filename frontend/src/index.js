import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <div className="container dark">
            <div className="app">
                <Header />
                <App />
            </div>
        </div>
    </React.StrictMode>
)
