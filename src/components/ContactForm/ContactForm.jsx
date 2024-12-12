import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FaCheck } from "react-icons/fa6";

import { API_URL } from "../../constants/global";
import "./ContactForm.css";
import Button from "../Shared/Button";

const ContactForm = () => {
  const { globalTexts } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const validateField = (field, value) => {
    let error = "";
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(value)) {
        error = true;
      }
    } else if (field === "message") {
      if (value.trim() === "") {
        error = true;
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
    setStatus("");

    // Validate all fields
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    setErrors({
      email: emailError,
      message: messageError,
    });

    if (!emailError && !messageError) {
      sendFormDataToApi();
    }
  };

  const sendFormDataToApi = async () => {
    setStatus("Sending...");

    try {
      const fData = new FormData();
      fData.set("name", formData.name);
      fData.set("email", formData.email);
      fData.set("message", formData.message);
      console.log(JSON.stringify(formData));
      const response = await fetch(API_URL, {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(formData),
        body: fData,
      });

      if (response.ok) {
        setStatus(globalTexts.formSubmitSuccess);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(globalTexts.formSubmitError);
      }
    } catch (error) {
      setStatus(globalTexts.formSubmitError);
    }
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">{globalTexts.sectionForm}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field-wrapper">
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder={globalTexts.formName}
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
            {errors.email && (
              <span className="form-error">
                {globalTexts.formEmailNotValid}
              </span>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field-wrapper">
            <textarea
              id="message"
              className="form-control message-input"
              placeholder={globalTexts.formMessage}
              value={formData.message}
              onChange={handleChange}
              rows={6}
            ></textarea>
            {errors.message && (
              <span className="form-error">{globalTexts.formMessageEmpty}</span>
            )}
          </div>
        </div>

        <Button
          text={globalTexts.formButton}
          href={""}
          type={"submit"}
          icon={<FaCheck className="icon" />}
        />
      </form>
      <p className="form-submit-status">{status}</p>
    </section>
  );
};

export default ContactForm;
