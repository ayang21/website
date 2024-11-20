import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import pdf from '../../imgs/2023_24_Resume.pdf'
import BCLogo from '../../imgs/BCLogo.svg'
import chinglish from '../../imgs/Chinglish.jpg'
import basketball from '../../imgs/basketball.gif'
import swimming from '../../imgs/swimming.gif'
import pingpong from '../../imgs/ping-pong.gif'
import football from '../../imgs/football.gif'
import selfie from '../../imgs/selfie.jpg'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


function About() {
    return (
        <div className="About">
            <div className="landing-text">
                <h1>So, just a little about me!</h1>
                <div className="scroll"></div>
            </div>
            <section className="about-items">
                <h3>I am a current Junior at Boston College <img className="text-img" src={BCLogo} alt ="BC Logo"/> pursuing a Bachelor’s in Computer Science and Psychology, and contrary to many other students of my age, I chose to stay close to home. 
                    <img src={selfie} className="chinglish" alt ="selfie"/>
                </h3>
            </section>
            <section className="about-items">
                <h3>I am an Asian-American who was born and raised in Massachusetts and am fluent in both Chinese and English<img className="chinglish" src={chinglish} alt ="Chinglish"/> <br/><br/> Having lived in a Chinese only household, I hold dear to me my Chinese background and culture, while also employing the American dream to live out my life and surpass my limits.</h3>
            </section>
            <section className="about-items">
                <h3>Currently I am a division 1 fencer at Boston College, but also, as any athlete is, a player in many other sports, granted not great: 
                    <p>&emsp;I love throwing around a <span className="hover-text">football</span>  <span className="hover-gif"><img src={football} alt="bad football"/></span></p> 
                    <p>&emsp;Playing a bit of pick up <span className="hover-text">basketball</span> <span className="hover-gif"><img src={basketball} alt="bad basketball"/></span></p> 
                    <p>&emsp;Going for a <span className="hover-text">swim</span> <span className="hover-gif"><img src={swimming} alt="bad swimming"/></span></p> 
                    <p>&emsp;Even playing <span className="hover-text">ping pong</span> <span className="hover-gif"><img src={pingpong} alt="bad ping pong"/></span>
                    </p>Heck, lets go golfing! Plus, given my coaching background, I am very skilled at explaining and teaching, but I also love learning, as I am very quick to pick ideas up, so I am always open to playing new sports.</h3>
            </section>
            <section className="about-items">
                <h3>Here are a few of the technical skills that I ended up picking up over the few years: Web Design(Figma), Java, JavaScript, Python, HTML, CSS, C, Microsoft Excel (VBA), PowerPoint</h3>
                <Document file={pdf} onLoadError={console.error} className="resume-pdf">
                    <Page pageNumber={1} />
                </Document>
            </section>
        </div>
    )
}

export default About;