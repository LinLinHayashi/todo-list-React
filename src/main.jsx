import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* Render the root. Also note that <React.StrictMode> is a wrapper component in React that helps developers with the development and debugging of React applications. It is not meant for use in production. */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
