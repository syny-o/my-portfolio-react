import SocialBox from "../Shared/SocialBox";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-logo">
          <img src="/assets/nav/signature.png" alt="logo" className="logo" />
        </div> */}
        <SocialBox />
        <div className="footer-contact">
          <p className="project-card-description">&copy; 2024 Ondrej Synek</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
