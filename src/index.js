import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEP29VYol9XqF0XJ7Ta7rqzyZPC0CJdpo",
  authDomain: "coderhouse-ecommerce-4f34a.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4f34a",
  storageBucket: "coderhouse-ecommerce-4f34a.appspot.com",
  messagingSenderId: "1092595580992",
  appId: "1:1092595580992:web:b8b8005ea5608f73a19fa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
