import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
setTimeout(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { 
      root.render(
        <React.StrictMode>
          <Nav />
          <Home />
          <Footer />
        </React.StrictMode>
      );
    }
  }, {once: true});
  const ring = document.querySelector('.ring');
  ring.innerHTML = 'Ready';
  // ring.parentNode.removeChild(ring);
}, 2000);

reportWebVitals(console.log);
