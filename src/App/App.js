import logoTop from '../imgs/logo-landing-top.png';
import logoBot from '../imgs/logo-landing-bottom.png';
import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoTop} className="App-logo" alt="logo-top" />
        <img src={logoBot} className="App-logo-bottom" alt="logo-bottom" /> 
        <div className="ring">Loading
          <span></span>
        </div>
        <p>
          Press <button type="button" className='press-esc' >esc</button> on your keyboard to exit into the home page. 
        </p>
        <span style={{fontSize: "10px"}}>If it is not working, you might want to refresh the page <br/> Or you can press "Ready" to continue</span>
      </header>
    </div>
  );
}

export default App;
