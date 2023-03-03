import { Link } from "react-router-dom";
import "./Listing.css";

export default function Listing({ media, type }) {
  return (
    <article className="show">
      <h3 className="title">
        <Link to={`/${type.toLowerCase()}/${media.id}`}>{media.title}</Link>
      </h3>
      <p className="description">{media.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {media.listedIn}
        </p>
        <p>
          <span>Duration:</span> {media.duration}
        </p>
      </aside>
    </article>
  );
}
