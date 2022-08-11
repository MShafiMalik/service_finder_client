import { Link } from "react-router-dom";
import "./Profile.scss";
const prop = {
  image: "assets/images/avatar/avatar-1.png",
  name: "john smith",
};

const Profile = () => {
  return (
    <>
      <div className="card col-4 profile-card d-flex align-items-center">
        <img
          src={prop.image}
          className="profile-img rounded-circle"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{prop.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/" className="btn theme-btn">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
