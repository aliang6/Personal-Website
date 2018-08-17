import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.heightUpdate(this.divElement.clientHeight);
    window.addEventListener('scroll', (e) => {
      var scrolled = window.pageYOffset;
      const background = document.getElementById('home-background');
      background.style.top = + (scrolled * 0.2) + 'px';
    });
  }

  render() {
    return(
      <div 
        id="home-container" 
        className="home-container"
        ref={ (divElement) => this.divElement = divElement}
      >
        <div className="home-overlay">
          <div id='home-background' className='home-background'></div>
          <h1 className="name">ANDY LIANG</h1>
          <ul className="desc-list">
            <li className="desc">Full Stack Developer.</li>
            <li className="desc">Software Engineer.</li>
            <li className="desc">Choreographer.</li>
            <li className="desc pro-links">
              <span class="far fa-file-alt"></span>
              <span class="fab fa-github"></span>
              <span class="fab fa-linkedin-in"></span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}