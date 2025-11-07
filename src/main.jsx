import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import { AuthProvider } from './contexts/AuthContext';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// Função para iniciar o MSW
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser.js');
    // Inicia o worker. A opção onUnhandledRequest: 'bypass'
    // garante que requisições não mockadas passem para a rede.
    return worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
  return Promise.resolve();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
});