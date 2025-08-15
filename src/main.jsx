import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.scss'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Please ensure there's a <div id='root'></div> in your HTML.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

