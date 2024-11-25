import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import Nav from './Pages/Nav/Nav';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';

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
  ring.style.cursor = 'pointer';

  ring.addEventListener('click', () => {
    root.render(
      <React.StrictMode>
        <Nav />
        <Home />
        <Footer />
      </React.StrictMode>
    );
  });

}, 2000);

reportWebVitals(console.log);
