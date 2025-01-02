import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="./images/logo.png" alt="company logo streamIt" />
            </div>
            <ul className="flexSB">
              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <button className="toggle">
              <i className="fa fa-bars"></i>
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
