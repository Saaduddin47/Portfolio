import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              Email: <a href="mailto:saaduddinsyed10@gmail.com">saaduddinsyed10@gmail.com</a>
            </p>
            <p>Phone: +91 8331928125</p>
            <h4>Education</h4>
            <p>
              B.Tech in Computer Science (Data Science), Lords Institute of
              Engineering and Technology — CGPA: 8.7 / 10 (Graduation: Jun 2026)
            </p>
          </div>
          <div className="contact-box">
            <h4>Featured</h4>
            <a
              href="https://social-network-final.vercel.app/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Social Network (Live) <MdArrowOutward />
            </a>
            <a
              href="https://reward-sync.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              RewardSync (Live) <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Syed Saaduddin Azhaan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
