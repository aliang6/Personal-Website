import React, { Component } from 'react';
import './Projects.css';

export default class Projects extends Component {

  componentDidMount(){
    this.props.heightUpdate(this.divElement.clientHeight);
  }

  render() {
    return (
      <div id="projects-container" className="projects-container" ref={divElement => this.divElement = divElement} > 
        <h1 className="projects-title">PROJECTS</h1>
        <div className='projects-section'>
          <Project 
            projectName='Prestige'
            projectDesc='Determine website reputation and writer trustworthiness after analyzing an article'
            projectGithub="https://github.com/aliang6/Prestige/"
            projectWebsite="https://prestige-web-app.herokuapp.com/"
            projectReact={true}
          />
          <Project 
            projectName='Mirage'
            projectDesc='Talk with a conversational chatbot in a simple, minimalistic mobile app'
            projectGithub="https://github.com/aliang6/Mirage/"
            projectReact={true}
          />
          <Project 
            projectName='GitSearch'
            projectDesc='Search for open-source projects to contribute to or use to build new projects'
            projectGithub="https://github.com/aliang6/GitSearch/"
            projectWebsite="https://gitsearch-web-app.herokuapp.com/"
            projectNode={true}
          />
        </div>
        <div className='projects-section'>
          <Project 
            projectName='Chinese Chess'
            projectDesc='Play the traditional board game of Chinese Chess on a screen'
            projectGithub="https://github.com/aliang6/Chinese-Chess/"
            projectJava={true}
          />
          <Project 
            projectName='C Projects'
            projectDesc='Compilation of projects created in C such as a multi-threaded server that stores key-value pairs.'
            projectGithub="https://github.com/aliang6/cse320/"
            projectC={true}
          />
          <Project 
            projectName='Assembly Projects'
            projectDesc='Compilation of projects created in MIPS Assembly such as a recursive search for DNA sequence patterns'
            projectGithub="https://github.com/aliang6/cse220/"
            projectAssembly={true}
          />
        </div>
    </div>
    );
  }
}

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
    
    this.mouseHover = this.mouseHover.bind(this);
    this.mouseExit = this.mouseExit.bind(this);
  }

  
  mouseHover(event) {
    event.preventDefault();
    this.setState({
      hovered: true,
    });
  }

  mouseExit(event) {
    event.preventDefault();
    this.setState({
      hovered: false,
    });
  }


  render() {
    return (
      <div className={'project-container ' + 
        (this.props.projectReact ? 'react-logo' : '') + 
        (this.props.projectNode ? 'nodejs-logo' : '') + 
        (this.props.projectJava ? 'java-logo' : '') + 
        (this.props.projectC ? 'c-logo' : '') + 
        (this.props.projectAssembly ? 'asm-logo' : '')} >
        <div className='project-overlay'>
          <h2 className='project-name'>{this.props.projectName}</h2>
          <div className='project-hover'>
          <h2 className='project-desc'>{this.props.projectDesc}</h2>
          <div className='project-github'><a href={this.props.projectGithub}>GitHub</a></div>
          {this.props.projectWebsite && <a href={this.props.projectWebsite} className='project-website'>Website</a>}
          {/* {this.state.hovered && <h2 onMouseEnter={this.mouseHover} onMouseOver={this.mouseHover} onMouseLeave={this.mouseExit} className='project-desc'>{this.props.projectDesc}</h2>}
          {!this.state.hovered && <h2 className='project-name'>{this.props.projectName}</h2>} */}
          </div>
        </div>
      </div>
    );
  }
}
