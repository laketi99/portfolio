import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PersonalPortfolio from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalPortfolio />
  </StrictMode>
);
