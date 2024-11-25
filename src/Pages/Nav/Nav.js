import Footer from "../Footer/Footer";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import logo from '../../imgs/logo-transparent-dark.svg';

function Nav() {
    return (
        <div className="Nav">
            <header className="Nav-header">
                <img src={logo} className="nav-logo" alt="logo" />
                 <ul className="nav-list">
                    <li className="nav-home" onClick={() => redirect(Home)}>Home</li>
                    <li className="nav-about" onClick={() => redirect(About)}>About</li>
                    <li className="nav-contact" onClick={() => redirect(Contact)}>Contact</li>
                </ul>
                
            </header>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
function redirect(Page) {
    root.render(
        <React.StrictMode>
            <Nav />
            <Page />
            <Footer />
        </React.StrictMode>
    );
}
export default Nav;