import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './pages/App.jsx'
import "./styles/style.scss";


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);