import { useState } from "react";

import { FaCheck } from "react-icons/fa6";
import "./ContactForm.css";
import Button from "../Shared/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ email: "", message: "" });

  const validateField = (field, value) => {
    let error = "";
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Zadejte platnou emailovou adresu.";
      }
    } else if (field === "message") {
      if (value.trim() === "") {
        error = "Napište nějakou zprávu.";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [id]: value,
    });

    // Validate the field
    if (id === "email" || id === "message") {
      const error = validateField(id, value);
      setErrors({
        ...errors,
        [id]: error,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    setErrors({
      email: emailError,
      message: messageError,
    });

    if (!emailError && !messageError) {
      alert("Formulář byl úspěšně odeslán!");
    }
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Kontakt</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field-wrapper">
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Jméno"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field-wrapper">
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field-wrapper">
            <textarea
              id="message"
              className="form-control message-input"
              placeholder="Zpráva"
              value={formData.message}
              onChange={handleChange}
              rows={6}
            ></textarea>
            {errors.message && (
              <span className="form-error">{errors.message}</span>
            )}
          </div>
        </div>

        <Button
          text={"Odeslat"}
          href={""}
          type={"submit"}
          icon={<FaCheck className="icon" />}
        />
      </form>
    </section>
  );
};

export default ContactForm;
