import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { FirebaseProvider } from './context/firebase';
import Header from './pages/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseProvider>
      <Header/>
    <App />
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
