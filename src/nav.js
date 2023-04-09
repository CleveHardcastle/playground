import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </nav>
    </div>
  );
}

export default Nav;
