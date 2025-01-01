import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <ul className="flexSB">
              <Link to="/">Home</Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
