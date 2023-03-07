import { Link } from "react-router-dom";
import "../styles/MediaListing.css";

export default function MovieListing({ movie }) {
  return (
    <article className="show">
      <h3 className="title">
        {/* This is where our `show` component is given the showID that we will later use in our `show` component. 
        Therefore allowing us to use the `useParams` feature */}
        <Link to={`/shows/${movie.id}`}>{movie.title}</Link>
      </h3>
      <p className="description">{movie.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {movie.listedIn}
        </p>
        <p>
          <span>Duration:</span> {movie.duration}
        </p>
      </aside>
    </article>
  );
}
