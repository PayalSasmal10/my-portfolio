import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaThLarge, FaTwitterSquare } from "react-icons/fa";
import "./Home.css";
// import loading_img from "../../assets/loading-background.gif";

const Home = () => {
  return (
    <main>
      <section className="container intro_body" id="home">
        {/* <div
          data-aos="zoom-in"
          className="intro_profile_pic_holder aos-init aos-animate">
          <div className="intro_Ring intro_Ring1">
            <div className="intro_Ring intro_Ring2">
              <div className="intro_Ring intro_Ring3">
                <span
                  alt="profile_pic"
                  style={{ backgroundImage: "url(loading_img)" }}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="introHolder">
          <div className="intro">Hello! I am</div>
          <div className="intro_name">Payal Sasmal</div>
          <div className="intro_designation">Senior Software Engineer</div>
        </div>
        <div className="intro_ContactContainer">
          <a
            href="https://www.linkedin.com/in/payalsasmal/"
            target="_blank"
            rel="noreferrer"
            className="contact-link-body"
          >
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/linkedin.svg" alt="LinkedIn"/>
          </a>
          <a
            href="https://github.com/PayalSasmal10"
            target="_blank"
            rel="nopener noreferrer"
            className="contact-link-body"
          >
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg" alt="GitHub" />
          </a>
          <a
            href="https://twitter.com/payalsasmal"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-body"

          >
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/twitter.svg" alt="Twitter" />

          </a>
          <a
            href="https://dev.to/payalsasmal"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-body"

          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/dev-dot-to.svg"
              alt="payalsasmal dev.to"
            />
          </a>
          {/* </div> */}
        </div>
      </section>
    </main>
  );
};

export default Home;
