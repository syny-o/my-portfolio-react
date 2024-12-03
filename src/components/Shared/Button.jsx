import React from "react";
import "./Button.css";

function Button({ text, href, type, icon }) {
  return (
    <button className="btn" href={href} type={type}>
      {icon} {text}
    </button>
  );
}

export default Button;
