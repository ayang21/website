import logoTop from './imgs/logo-landing-top.png';
import logoBot from './imgs/logo-landing-bottom.png';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoTop} className="App-logo" alt="logo-top" />
        <img src={logoBot} className="App-logo-bottom" alt="logo-bottom" /> 
        <div class="ring">Loading
          <span></span>
        </div>
        <p>
          Press <button type="button" className='press-esc' >esc</button> on your keyboard to exit into the home page. <p style={{fontSize: "15px"}}>If it is not working, you might want to refresh the page.</p>
        </p>
      </header>
    </div>
  );
}

export default App;
