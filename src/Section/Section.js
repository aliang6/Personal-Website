import React, { Component } from 'react';
import './Section.css';

export default class About extends Component {

  render() {
    return(
      <div className="container">
        <h1 className='section-title'>{this.props.title}</h1>
        {this.props.content}
      </div>
    );
  }
}

