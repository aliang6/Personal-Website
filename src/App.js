import React, { Component } from 'react';
import './App.css';
import Section from'./Section/Section';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeHeight: 0,
      aboutHeight: 0,
      projectsHeight: 0,
      contactHeight: 0,
      headerBackground: false,
      height: 0,
    }
    
    this.headerRef;
    this.homeHeightUpdate = this.homeHeightUpdate.bind(this);
    this.aboutHeightUpdate = this.aboutHeightUpdate.bind(this);
    this.projectsHeightUpdate = this.projectsHeightUpdate.bind(this);
    this.contactHeightUpdate = this.contactHeightUpdate.bind(this);
    this.homeClick = this.homeClick.bind(this);
    this.aboutClick = this.aboutClick.bind(this);
    this.projectsClick = this.projectsClick.bind(this);
    this.contactClick = this.contactClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      height: window.pageYOffset,
    });
    if(window.pageYOffset >= 50){
      this.setState({
        headerBackground: true,
      });
    } else {
      this.setState({
        headerBackground: false,
      });
    }
  }

  homeHeightUpdate(height) {
    this.setState({ homeHeight: height });
  }
  aboutHeightUpdate(height) {
    this.setState({ aboutHeight: height });
  }
  projectsHeightUpdate(height) {
    this.setState({ projectsHeight: height });
  }
  contactHeightUpdate(height) {
    this.setState({ contactHeight: height });
  }
  homeClick(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  aboutClick(event) {
    event.preventDefault();
    window.scrollTo({top: this.state.homeHeight, behavior: 'smooth'});
  }
  projectsClick(event) {
    event.preventDefault();
    window.scrollTo({top: this.state.homeHeight + this.state.aboutHeight, behavior: 'smooth'});
  }
  contactClick(event) {
    event.preventDefault();
    window.scrollTo({top: this.state.homeHeight + this.state.aboutHeight + this.state.projectsHeight, behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        <Header 
          homeClick = {this.homeClick}
          aboutClick = {this.aboutClick}
          projectsClick = {this.projectsClick}
          contactClick = {this.contactClick}
          headerBackground = {this.state.headerBackground}
          height = {this.state.height}
        />
        <Home heightUpdate={this.homeHeightUpdate}/>
        <About heightUpdate={this.aboutHeightUpdate}/>
        <Projects heightUpdate={this.projectsHeightUpdate}/>
        <Contact heightUpdate={this.contactHeightUpdate}/>
        {this.state.headerBackground && <div class="return-top fas fa-angle-up" onClick={this.homeClick}></div>}
      </div>
    );
  }
}

class Header extends Component {

  render() {
    return(
      <div id="header" className={"header"}>
        <ul className={"header-list "  + (this.props.headerBackground ? 'header-background-pin' : 'header-background-unpin')}>
          <div className='header-name-logo'>
            <h1 onClick={this.props.homeClick}>A L </h1>
          </div>
          <div className="list-container">
            {/* <li className="header-home">
              <button className="header-button" onClick={this.props.homeClick}>Home</button>
            </li> */}
            <li className="header-about">
              <button className="header-button" onClick={this.props.aboutClick}>About</button>
            </li>
            <li className="header-projects">
              <button className="header-button" onClick={this.props.projectsClick}>Projects</button>
            </li>
            <li className="header-contact">
              <button className="header-button" onClick={this.props.contactClick}>Contact</button>
            </li>
            <li className='header-links'>
              <a href='https://github.com/aliang6/' target='_blank'><span class="far fa-file-alt"></span></a>
              <a href='https://github.com/aliang6/' target='_blank'><span class="fab fa-github"></span></a>
              <a href='https://github.com/aliang6/' target='_blank'><span class="fab fa-linkedin-in"></span></a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
