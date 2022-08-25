import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SERVER_BASE_URL } from "../../../common/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendMessageForm = (props) => {
  const isAuth = useSelector((state) => state.isAuth);
  const [message, setMessage] = useState("");
  const [messageValidationErrors, setMessageValidationErrors] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message) {
      setMessageValidationErrors(true);
      return false;
    }
    if (isAuth === true) {
      const body = {
        receiver_user_id: props.seller._id,
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
            setMessage("");
            document.querySelector(".modal-backdrop").classList.remove("show");
            document.getElementById("messageModal").classList.remove("show");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err, {
            autoClose: 2000,
          });
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h5 className="text-center mb-3">
          Message to {props.seller.firstname} {props.seller.lastname}
        </h5>
        <div className="form-group">
          <textarea
            className="form-control rounded-2"
            rows="3"
            placeholder="Type your message..."
            onChange={(event) => {
              setMessageValidationErrors(false);
              setMessage(event.target.value);
            }}
            value={message}
          ></textarea>
          {messageValidationErrors === true ? (
            <label className="text-danger mt-1">Message is mendatory!</label>
          ) : (
            ""
          )}
          <button className="btn theme-btn mt-2 float-end">SEND</button>
        </div>
      </form>
    </>
  );
};

export default SendMessageForm;
