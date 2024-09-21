import React from 'react'

export default function Footer() {
  return (
    <footer>

    <div className="container">

      <div className="wrapper">

        <a href="#" className="footer-logo">
          <img src={require("../../assets/logo-light.png")} alt="SimpleBlog Logo" width="150"/>
        </a>

        <p className="footer-text" style={{color:'#728197'}}>
          Learn about Web accessibility, Web performance, and Database management.
        </p>

      </div>

      <div className="wrapper">

        <p className="footer-title" style={{color:'#728197'}}>Quick Links</p>

        <ul>

          <li>
            <a href="#" className="footer-link" style={{color:'#728197'}}>Advertise with us</a>
          </li>

          <li>
            <a href="#" className="footer-link" style={{color:'#728197'}}>About Us</a>
          </li>

          <li>
            <a href="#" className="footer-link" style={{color:'#728197'}}>Contact Us</a>
          </li>

        </ul>

      </div>

      <div className="wrapper">

        <p className="footer-title" style={{color:'#728197'}}>Legal Stuff</p>

        <ul>

          <li>
            <a href="#" className="footer-link" style={{color:'#728197'}}>Privacy Notice</a>
          </li>

          <li>
            <a href="#" className="footer-link" style={{color:'#728197'}}>Cookie Policy</a>
          </li>

          <li>
            <a href="#" className="footer-link" style={{color:'#728197'}}>Terms Of Use</a>
          </li>

        </ul>

      </div>

    </div>

    <p className="copyright" style={{color:'#728197'}}>
      &copy; Copyright 2024 <a href="#">SimpleBlog</a>
    </p>

  </footer>
  )
}
