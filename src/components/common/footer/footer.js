import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer-group">
          <div className="linkedin">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/rachel-lucas/">
              <img
                src={require("./../../../assets/linkedin.png")}
                alt="linked in logo"
              />{" "}
            </a>
          </div>
          <div className="button-group">
            <div className="contact-text">Let's get in touch!</div>
            <Link to="contact">
              <button>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
