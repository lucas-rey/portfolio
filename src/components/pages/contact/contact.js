import React from "react";
import "./contact.scss";
import MenuWrapper from "../../common/menu/menu";
import Footer from "../../common/footer/footer";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="page-name">Contact</div>
        <MenuWrapper />
        <div className="contact-group">
          <div className="contact-text">
            <div className="contact-title">
              <h2>Let's get in touch</h2>
            </div>
            <div className="description">
              <p>
                If you have any opportunities or questions that you would like
                to discuss further please don’t hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
