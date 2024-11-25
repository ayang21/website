import React from 'react';
import Project1gif from '../../imgs/project1.gif';
import Project2gif from '../../imgs/project2.gif';

import './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="landing-text">
                <h1 >Welcome to my home page!</h1>
                <div className="scroll"></div>
            </div>
            <div className="landing-container">
                <div className='intro-text-container'>
                    <h3 className='intro-text'>I'm Adam! Thanks for stopping by.</h3>
                    <h3 className='intro-text'>I’m a student currently studying Computer Science and Psychology with a passion for learning and creating, and this is what I have done so far!</h3>
                </div>

                <div className="project-list">
                    <br/>
                    <p className="project-summary">Sets up a number comparison trial where you will be prompted two fractions, and it is your task to determine if the two fractions are equal to each other or not.</p> <br/>
                    <a href='https://numbercomparisons.netlify.app/' target="_blank" rel="noopener noreferrer"><img className="project-gif" src={Project1gif} alt="project-gif"/></a>
                    <a href='https://timed-survey.netlify.app/' target="_blank" rel="noopener noreferrer"><img className="project-gif" src={Project2gif} alt="project-gif"/></a>
                </div>
            </div>
        </div>
    )
}

export default Home;