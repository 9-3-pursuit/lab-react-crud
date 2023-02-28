import hero from "../../assets/denise-jans-Lq6rcifGjOU-unsplash.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={hero} alt="film" />
      <p>
        Photo by{" "}
        <Link to="https://unsplash.com/@dmjdenise?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Denise Jans {" "}
        </Link>
        on{" "}
        <Link to="https://unsplash.com/s/photos/movie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </Link>
      </p>
    </div>
  );
}
export default Home;
