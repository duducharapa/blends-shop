import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// CSS imports
import '../node_modules/primeflex/primeflex.min.css';
import 'primereact/resources/primereact.min.css';
import './assets/reset.css';
import './assets/theme.css';
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
);

