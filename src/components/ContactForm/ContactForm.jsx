import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-container">
      <h2 className="experience-title">Kontakt</h2>
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
        <button type="submit" className="btn-primary">
          Odeslat
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
