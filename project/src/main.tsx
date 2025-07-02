// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import './index.css'; // Ensure you have this file for Tailwind CSS
=======
import './index.css';
>>>>>>> Stashed changes
=======
import './index.css';
>>>>>>> Stashed changes
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
