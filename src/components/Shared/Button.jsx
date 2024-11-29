import React from "react";
import "./Button.css";

function Button({ text, href, icon }) {
  return (
    <a className="btn" href={href}>
      {icon} {text}
    </a>
  );
}

export default Button;
