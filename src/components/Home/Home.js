import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import './Home.css';
import loading_img from "../../assets/loading-background.gif";

const Home = () => {
  return (
    <section className='container intro_body' id='home'>
      <div data-aos="zoom-in" className='intro_profile_pic_holder aos-init aos-animate'>
        <div className='intro_Ring intro_Ring1'>
          <div className='intro_Ring intro_Ring2'>
            <div className='intro_Ring intro_Ring3'>
              <span alt="profile_pic" style={{backgroundImage: 'url(loading_img)'}} />
            </div>
          </div>
        </div>
      </div>
      <div className='introHolder'>
        <div className='intro'>Hello! I'm</div>
        <div className='intro_name'>Payal Sasmal</div>
        <div className='intro_designation'>Software Engineer</div>
      </div>
      <div>
        <div>
            <a href="https://www.linkedin.com/in/payalsasmal/">
                <div><AiFillLinkedin/></div>
            </a>
            <a href="https://github.com/PayalSasmal10">
                <div><FaGithubSquare/></div>
            </a>
            <a href="https://twitter.com/payalsasmal">
                <div><FaTwitterSquare/></div>
            </a>
            <a href="">
                <div>
                    <img src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/dev-dot-to.svg'/>
                </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
