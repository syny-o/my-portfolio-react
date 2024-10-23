import React from "react";
import "./Button.css";

function Button({ text, href }) {
  return (
    <a className="btn" href={href}>
      {text}
    </a>
  );
}

export default Button;
