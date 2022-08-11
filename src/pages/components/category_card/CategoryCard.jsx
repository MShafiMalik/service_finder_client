import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.image} alt="Card" />
      <div className="card-body">
        <h4 className="card-title text-center">{props.title}</h4>
        <div className="d-grid">
          <Link to={`/category/${props.id}`} className="btn theme-btn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
