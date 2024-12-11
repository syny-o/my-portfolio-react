import "./SocialBox.css";

function SocialBox() {
  return (
    <div className="social">
      <div className="social-image-container">
        <a href="mailto:synekjbc@gmail.com" target="_blank">
          <img src="/assets/social/mail.png" alt="Email" />
        </a>
      </div>
      <div className="social-image-container">
        <a href="https://github.com/syny-o" target="_blank">
          <img src="/assets/social/github.png" alt="github" />
        </a>
      </div>
      <div className="social-image-container">
        <a
          href="https://www.linkedin.com/in/ond%C5%99ej-synek-378a692a5/"
          target="_blank"
        >
          <img src="/assets/social/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

export default SocialBox;
