import "./Header.css";

const Header = () => {
  return (
    <nav className="style-nav">
      <div className="name-details">
        {/* <div  className="headerA">
        <a href="#" className="headerProperties">Home</a>
        <a href="#" className="headerProperties">Experience</a>
        <a href="#" className="headerProperties">About</a>
        <a href="#" className="headerProperties">Blogs</a>
        <a href="#" className="headerProperties">Contact</a>
      </div> */}
        <div>
          <a href="/">
            <span>PS</span>
          </a>
        </div>
        <div className="menu">
          <div className="burger">
            <span></span>
          </div>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Header;
