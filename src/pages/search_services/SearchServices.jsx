import ServiceCard from "../components/service_card/ServiceCard";
import "./SearchServices.scss";

const services = [
  {
    id: 1,
    provider: {
      name: "Provider Name",
      image: "assets/images/avatar/avatar-1.png",
      rating: 4.9,
      review_count: 23,
    },
    location: {
      lat: 48.8584,
      lng: 2.2945,
    },
    title: "I will do responsive squarespace website design or squarespace",
    price: 300,
    images: [
      "assets/images/services/image1.jfif",
      "assets/images/services/image2.jfif",
    ],
  },
  {
    id: 1,
    provider: {
      name: "Provider Name",
      image: "assets/images/avatar/avatar-1.png",
      rating: 4.9,
      review_count: 23,
    },
    location: {
      lat: 48.8684,
      lng: 2.2845,
    },
    title: "I will do responsive squarespace website design or squarespace",
    price: 300,
    images: [
      "assets/images/services/image1.jfif",
      "assets/images/services/image2.jfif",
    ],
  },
  {
    id: 1,
    provider: {
      name: "Provider Name",
      image: "assets/images/avatar/avatar-1.png",
      rating: 4.9,
      review_count: 23,
    },
    location: {
      lat: 48.8484,
      lng: 2.2915,
    },
    title: "I will do responsive squarespace website design or squarespace",
    price: 300,
    images: [
      "assets/images/services/image1.jfif",
      "assets/images/services/image2.jfif",
    ],
  },
  {
    id: 1,
    provider: {
      name: "Provider Name",
      image: "assets/images/avatar/avatar-1.png",
      rating: 4.9,
      review_count: 23,
    },
    location: {
      lat: 48.8284,
      lng: 2.2745,
    },
    title: "I will do responsive squarespace website design or squarespace",
    price: 300,
    images: [
      "assets/images/services/image1.jfif",
      "assets/images/services/image2.jfif",
    ],
  },
];

const SearchServices = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <h2 className="text-center mt-4">Nearby Services</h2>

        <div className="row container-fluid mt-4">
          {services.map((service, i) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={i}>
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchServices;
