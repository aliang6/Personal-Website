import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {

  render() {
    return(
      <div id="contact-container" className="contact-container">
        <div className="contact-section">
          <h1 className="contact-title">CONTACT</h1>
          <div className="contact-information">
            <h2>Email: andy.liang.1@stonybrook.edu</h2>
            <h2>GitHub: <a href="https://www.github.com/aliang6" target="_blank">https://www.github.com/aliang6</a></h2>
            <h2>LinkedIn: <a href="https://www.linkedin.com/in/andy-liang-677167127/" target="_blank">https://www.linkedin.com/in/andy-liang-677167127/</a></h2>
          </div>
        </div>
      </div>
    );
  }
}

