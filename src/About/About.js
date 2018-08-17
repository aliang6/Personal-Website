import React, { Component } from 'react';
import './About.css';

export default class About extends Component {

  componentDidMount() {
    this.props.heightUpdate(this.divElement.clientHeight);
  }

  render() {
    return(
      <div id="about-container" className="about-container" ref={divElement => this.divElement = divElement}>
        <div className='about-text-section'>
          <h1 className='about-title'>ABOUT</h1>
          <div className='about-text'>
            <div className='about-text-desc'>
              <h2 className='about-text-strong'>
              I'm Andy Liang, a college student from New York who loves to code, dance, and listen to classical music.
              </h2>
              <h2>
              Currently, I'm a junior at Stony Brook University, double majoring in Computer Science and Applied Mathematics &amp; Statistics and minoring in Music.
              </h2>
              <h2>
              I've worked on projects using various front-end and back-end tools while also integrating various research topics such as machine learning and natural language processing.
              </h2>
              <h2>
              In my free time, I enjoy learning new techologies, dancing, playing the piano, and working out.
              </h2>
            </div>
            <div className='about-text-skills'>
              <div>
                <h2 className='about-text-strong'>I've worked with: </h2>
                <h2>HTML5, CSS3, JavaScript ES6, React</h2>
                <h2>React Native, Node.js, Express, LaTeX</h2>
                <h2>Java, JavaFX, C/C#/C++, MIPS Assembly, Python</h2>
                <h2>MongoDB, Mongoose, Google Firebase, Git, Heroku</h2>
              </div>
              <div>
                <h2 className='about-text-strong'>I've taken courses in:</h2>
                <h2>Machine Learning, Computer System Fundamentals, Theory of Computation, Computer Networks, Objected-Oriented Programming</h2>
              </div>
              <div>
                <h2 className='about-text-strong'>I'm currently studying:</h2>
                <h2>Operating Systems, Computer Security Fundamentals, Algorithms</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='about-image-section'>
          
        </div>
      </div>
    );
  }
}

