import { Link } from "react-router-dom";
import "./Error.css"
import image from "../../images/notFound.svg"

const Error = () => {
  return (
    <div className="error-wrapper">
      <img src={image} alt="not-found" />
      <div className="error-text">
        <h4>Lost and not found!</h4>
        <p>Seems like we couldn’t find the page you were looking for.</p>
        <Link to="/" className="back">
          &larr; Go back
        </Link>
      </div>
    </div>
  );
};

export default Error;
