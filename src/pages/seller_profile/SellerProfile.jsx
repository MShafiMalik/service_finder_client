import "./SellerProfile.scss";
import ServiceCard from "../components/service_card/ServiceCard";
import SellerReviews from "../components/seller_reviews/SellerReviews";

const seller_data = {
  id: 1,
  image: "assets/images/avatar/avatar-1.png",
  name: "john smith",
  rating: "5",
  review: "519",
  location: "Multan,Pakistan",
  description:
    "I'm a full time freelance web developer with extensive experience in building high quality websites. I also offer SEO services. I have built many professional websites and make them shine on internet with my SEO skills. Contact now to get your dream website designed and featured.",
  services: [
    {
      id: 1,
      seller: {
        name: "Provider Name",
        image: "assets/images/avatar/avatar-1.png",
        rating: 4.9,
        review_count: 23,
      },
      title: "I will do responsive squarespace website design or squarespace",
      price: 300,
      images: [
        "assets/images/services/image1.jfif",
        "assets/images/services/image2.jfif",
      ],
    },
    {
      id: 2,
      seller: {
        name: "Provider Name",
        image: "assets/images/avatar/avatar-1.png",
        rating: 4.9,
        review_count: 23,
      },
      title: "I will do responsive squarespace website design or squarespace",
      price: 300,
      images: [
        "assets/images/services/image1.jfif",
        "assets/images/services/image2.jfif",
      ],
    },
    {
      id: 3,
      seller: {
        name: "Provider Name",
        image: "assets/images/avatar/avatar-1.png",
        rating: 4.9,
        review_count: 23,
      },
      title: "I will do responsive squarespace website design or squarespace",
      price: 300,
      images: [
        "assets/images/services/image1.jfif",
        "assets/images/services/image2.jfif",
      ],
    },
    {
      id: 4,
      seller: {
        name: "Provider Name",
        image: "assets/images/avatar/avatar-1.png",
        rating: 4.9,
        review_count: 23,
      },
      title: "I will do responsive squarespace website design or squarespace",
      price: 300,
      images: [
        "assets/images/services/image1.jfif",
        "assets/images/services/image2.jfif",
      ],
    },
  ],
};

const services = seller_data.services;
const SellerProfile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-5 ">
          <div className="col-md-4 p-0">
            <div className="card  mt-5 profile-card d-flex align-items-center">
              <img
                src={seller_data.image}
                className="profile-img mt-5 rounded-circle"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">
                  {seller_data.name}
                </h5>
                <div className="ratingstars">
                  <ul>
                    <li className="me-1">
                      <i className="fa fa-star rating-color "></i>
                    </li>
                    <li className="me-1">
                      <i className="fa fa-star rating-color"></i>
                    </li>
                    <li className="me-1">
                      <i className="fa fa-star rating-color"></i>
                    </li>
                    <li className="me-1">
                      <i className="fa fa-star rating-color"></i>
                    </li>
                    <li className="me-1">
                      <i className="fa fa-star rating-color"></i>
                    </li>
                    <li>
                      <span className="fw-bold rating-color">
                        {seller_data.rating}
                      </span>
                    </li>
                    <li>
                      <span className="fw-bold rating-color reviewcolor">{`(${seller_data.review} reviews)`}</span>
                    </li>
                  </ul>
                </div>
                <div className="contactbutton d-flex justify-content-center">
                  <button className="btn theme-btn col-10">Contact Me</button>
                </div>
              </div>
              <div className="card-footer col-10 bg-transparent">
                <ul className="p-0">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <b className="ms-2">from</b>
                    <b className=" float-end">{seller_data.location}</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card description mt-5 d-flex align-items-center">
              <div className="card-body">
                <h3 className="card-title mb-0 mt-4 fw-bold">Description</h3>
                <p className="card-text fw-bold">{seller_data.description}</p>
              </div>
            </div>
          </div>
          {/* profile cards ends here */}
          <div className="col-md-8 ">
            <div className="row ms-2">
              <h2 className="mt-5 mb-3">{seller_data.name}'s Services</h2>
              {services.map((service, i) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-5" key={i}>
                    {/* <ServiceCard service={service} /> */}
                  </div>
                );
              })}
              <div className="seller-reviews mb-4">
                <h2 className="fw-bold">Reviews as seller</h2>
                <div className="ratingstars">
                  <ul>
                    <li className="me-1">
                      <i className="fa fa-star rating-color "></i>
                    </li>
                    <li className="me-1">
                      <i className="fa fa-star rating-color"></i>
                    </li>
                    <li className="me-1">
                      <i className="fa fa-star rating-color"></i>
                    </li>
                    <li className="me-1">
                      <i className="fa fa-star rating-color"></i>
                    </li>
                    <li className="me-1">
                      <i className="fa fa-star rating-color"></i>
                    </li>
                    <li>
                      <span className="fw-bold rating-color">
                        {seller_data.rating}
                      </span>
                    </li>
                    <li>
                      <span className="fw-bold rating-color reviewcolor">{`(${seller_data.review} reviews)`}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <SellerReviews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
