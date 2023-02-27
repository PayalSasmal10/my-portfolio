import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';


const Home = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <img src="/assets/profile.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>Hello! I'm</div>
        <div>Payal Sasmal</div>
        <div>Software Engineer</div>
      </div>
      <div>
        <div>
            <a href="">
                <div><AiFillLinkedin/></div>
            </a>
            <a href="">
                <div><FaGithubSquare/></div>
            </a>
            <a href="">
                <div><FaTwitterSquare/></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
