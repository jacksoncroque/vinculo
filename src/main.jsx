import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';

import { GlobalProvider } from './contexts/GlobalContext.jsx';

import App from './App.jsx';

import './styles/global.scss';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <GlobalProvider>
            <App />
         </GlobalProvider>
      </BrowserRouter>
   </StrictMode>,
);
