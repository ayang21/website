import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Nav from './Pages/Nav/Nav';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function landing(){
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

function redirect() {
  root.render(
    <React.StrictMode>
      <Nav />
      <Home />
      <Footer />
    </React.StrictMode>
  );
}

landing();
setTimeout(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { 
      redirect();
    }
  }, {once: true});
  const ring = document.querySelector('.ring');
  ring.innerHTML = 'Ready';
  ring.style.cursor = 'pointer';
  
  ring.addEventListener('click', () => {
    redirect();
  });
}, 2000);

reportWebVitals(console.log);