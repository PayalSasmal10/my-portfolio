import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import './Home.css';


const Home = () => {
  return (
    <section className='container intro_body'>
      <div>
        <div>
          <div>
            <div>
              <img src="./assets/profile.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='introHolder'>
        <div className='intro'>Hello! I'm</div>
        <div>Payal Sasmal</div>
        <div>Software Engineer</div>
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
