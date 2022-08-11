import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section>
        <div className="container-fluid outer-wrapper">
          <div className="row m-auto inner-wrapper">
            <h5 className=" fst-italic heading font-w-600 lh-1 fs-2 text-center">
              Our company
            </h5>
            <h3 className="heading font-w-800 mb-5  text-center lh-1 fs-2">
              Few words about us
            </h3>
            <div className="row m-auto justify-content-evenly">
              <div className="col-md-5  p-0">
                <h4 className="fs-2 font-w-700 lh-1 text-capitalize">
                  15 years of experience in home service business
                </h4>
                <p className="mt-3 fs-6 lh-base">
                  Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus
                  est suscipit et vitae nulla. Once aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur elit ipsum tempus est.
                </p>
                <ul className="list p-0">
                  <li className="text-capitalize font-w-700 mb-2">
                    24/7 online service available
                  </li>
                  <li className="text-capitalize font-w-700 mb-2">
                    Affordable price no hidden cost
                  </li>
                  <li className="text-capitalize font-w-700 mb-2">
                    Proffesional handyman
                  </li>
                </ul>
              </div>
              <div className="col-md-5 m-0 p-0">
                <img
                  src="https://demo.w3layouts.com/demosWTR/Freedom/30-03-2020/home-service-freedom-demo_Free/1435018137/web/assets/images/aboutpage.jpg"
                  alt=" "
                  className="aobutImg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section */}
      <section>
        <div className="container-fluid outer-wrapper bg-light">
          <div className="row m-auto inner-wrapper">
            <h5 className="fst-italic heading font-w-600 lh-1 fs-2 text-center">
              Some Features
            </h5>
            <h3 className="heading font-w-800 mb-5 text-center lh-1 fs-2">
              Why choose us
            </h3>
            <div className="row m-auto justify-content-evenly">
              <div className="col-md-5 ">
                <h4 className="fs-2 font-w-700 lh-sm text-capitalize">
                  We take great pride in all the services we offer, but what
                  makes our company special?
                </h4>
                <p>
                  Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus
                  est suscipit et vitae nulla. Once aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur elit.
                </p>
                <p>
                  Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus
                  est suscipit et vitae nulla. Once aute irure dolor.
                </p>
              </div>

              <div className="col-md-7 px-3">
                <div className="features">
                  <p className="features-tag fw-bold mb-0">
                    well trained technician
                  </p>
                  <p className="features-tag fw-bold mb-0">Service</p>
                  <p className="features-tag fw-bold mb-0">
                    Using Best Quality Tools.
                  </p>
                  <p className="features-tag fw-bold mb-0">Hand</p>
                  <p className="features-tag fw-bold mb-0">
                    100% Satisfactory Work.
                  </p>
                  <p className="features-tag fw-bold mb-0">
                    Work Completion In Time.
                  </p>
                  <p className="features-tag fw-bold mb-0"></p>
                  <p className="features-tag fw-bold mb-0">
                    Expert Consultant Team
                  </p>
                  <p className="features-tag fw-bold mb-0">On Time Response</p>
                  <p className="features-tag fw-bold mb-0">
                    Get Expert Technician
                  </p>
                  <p className="features-tag fw-bold mb-0">Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
