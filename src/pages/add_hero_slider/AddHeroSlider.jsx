import axios from "axios";
import { useState } from "react";
import { SERVER_BASE_URL } from "../../common/constants";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const AddHeroSlider = () => {
  const [title, setTitle] = useState("");
  const [imageInput, setImageInput] = useState("");

  const imageHandleChange = (e) => {
    setImageInput(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("upload_preset", "hero_sliders");
    formData.append("file", imageInput);
    fetch("https://api.cloudinary.com/v1_1/dcwobtmhv/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const url = data.url;
        console.log(url);

        axios
          .post(SERVER_BASE_URL + "api/hero-slider/add", {
            title: title,
            image: url,
          })
          .then(function (response) {
            if (response.statusText === "OK") {
              console.log(response);
            }
          });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container py-4">
        <input
          type="file"
          name="image"
          onChange={imageHandleChange}
          className="form-control mb-3"
        />
        <input
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="submit"
          className="btn btn-block theme-btn mt-3"
          value="Save"
        />
      </form>
    </>
  );
};

export default AddHeroSlider;
