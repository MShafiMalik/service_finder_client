import "./SellerProfile.scss";
import SellerReviews from "../components/seller_reviews/SellerReviews";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_BASE_URL } from "../../common/constants";
import { useParams } from "react-router-dom";
import SellerServiceCard from "./SellerServiceCard";
import ReviewCardsContainer from "../components/review_cards_container/ReviewCardsContainer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "react-bootstrap/Modal";

const SellerProfile = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const [message, setMessage] = useState("");
  const [messageValidationErrors, setMessageValidationErrors] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const [seller, setSeller] = useState({});
  const [reviews, setReviews] = useState([]);
  const [services, setServices] = useState([]);

  const { seller_user_id } = useParams();

  useEffect(() => {
    const body = { user_id: seller_user_id };
    axios.post(SERVER_BASE_URL + "api/seller", body).then((response) => {
      if (response.status === 200) {
        setSeller(response.data.data);
        setReviews(response.data.data.reviews);
        setServices(response.data.data.services);
      }
    });
  }, [seller_user_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message) {
      setMessageValidationErrors(true);
      return false;
    }
    if (isAuth === true) {
      const body = {
        receiver_user_id: seller._id,
        message_text: message,
      };
      axios
        .post(`${SERVER_BASE_URL}api/message/send`, body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Message Sent Successfully!", {
              autoClose: 2000,
            });
            setShowModal(false);
            setMessage("");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err, {
            autoClose: 2000,
          });
        });
    } else {
      toast.error("Please Login Before Send Message!", {
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row px-4">
          <div className="col-md-4 mb-5">
            <div className="card profile-card d-flex align-items-center">
              <img
                src={seller.image}
                className="profile-img mt-5 rounded-circle"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">
                  {seller.firstname + " " + seller.lastname}
                </h5>
                <div className="ratingstars">
                  <ul>
                    <SellerReviews reviews={reviews} />
                  </ul>
                </div>
                <div className="contactbutton d-flex justify-content-center">
                  <button className="btn theme-btn" onClick={handleModalShow}>
                    Message
                  </button>
                </div>
              </div>
              <div className="card-footer col-10 bg-transparent">
                <p className="ms-2">
                  <b className="me-2">From:</b>
                  {seller.city}, {seller.state}, {seller.country}
                </p>
              </div>
            </div>
            <h5 className="mb-0 mt-5 mb-2">Description</h5>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{seller.description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="mb-3">{seller.firstname}'s Services</h2>
            <div className="row">
              {services.map((service, i) => {
                return (
                  <div className="col-lg-4 col-sm-6 mb-4" key={i}>
                    <SellerServiceCard service={service} />
                  </div>
                );
              })}
            </div>
            <div className="my-4">
              <ReviewCardsContainer reviews={reviews} />
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <h5 className="text-center mb-3">
            Message to {seller.firstname} {seller.lastname}
          </h5>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <textarea
                className="form-control rounded-2"
                rows="4"
                placeholder="Type your message..."
                autoFocus
                onChange={(event) => {
                  setMessageValidationErrors(false);
                  setMessage(event.target.value);
                }}
                value={message}
              ></textarea>
              {messageValidationErrors === true ? (
                <label className="text-danger mt-1">
                  Message is mendatory!
                </label>
              ) : (
                ""
              )}
              <button type="submit" className="btn theme-btn mt-3 float-end">
                SEND
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SellerProfile;
