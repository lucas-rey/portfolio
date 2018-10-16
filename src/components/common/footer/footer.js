import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer-group">
          <div className="linkedin">
            <img
              src={require("./../../../assets/linkedin.png")}
              alt="linked in logo"
            />
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
