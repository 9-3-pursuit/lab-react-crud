import { Link } from "react-router-dom";
import "./styles/Nav.css";

export default function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Screen<span>Views</span>
          </Link>
        </h1>
      </article>
      <nav>
        <ul>
          <li>
            <Link to="/shows">All Shows</Link>
          </li>
          <li>
            <Link to="/movies">All Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
