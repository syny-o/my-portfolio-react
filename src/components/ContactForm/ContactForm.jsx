import React from "react";
import "./ContactForm.css";
import Button from "../Shared/Button";

const ContactForm = () => {
  return (
    <section className="container">
      <h2 className="section-title">Kontakt</h2>
      <form className="contact-form">
        <div className="form-group">
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            className="form-control name-input"
            placeholder="Jméno"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="form-control email-input"
          />
        </div>

        {/* <label htmlFor="email">Email:</label> */}

        <div className="form-group">
          {/* <label htmlFor="message">Message:</label> */}
          <textarea
            id="message"
            className="form-control message-input"
            placeholder="Zpráva"
          ></textarea>
        </div>
        <Button text={"Odeslat"} href={""} />
      </form>
    </section>
  );
};

export default ContactForm;
