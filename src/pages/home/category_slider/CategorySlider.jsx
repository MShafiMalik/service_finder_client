import { useState, useEffect } from "react";
import CategoryCard from "../../components/category_card/CategoryCard";
import "./CategorySlider.scss";
import axios from "axios";
import { SERVER_BASE_URL } from "../../../common/constants";

const getLargeScreenSlider = (categories) => {
  let length = categories.length;
  let indicators = [];
  let items = [];
  let slides_count;
  let per_slide_items;
  let remaining_length;
  let index;

  // For Large Screen
  remaining_length = length;
  if (categories.length % 3 === 0) {
    slides_count = length / 3;
  } else {
    slides_count = parseInt(length / 3) + 1;
  }

  index = 0;
  for (let i = 0; i < slides_count; i++) {
    if (remaining_length > 3) {
      per_slide_items = 3;
    } else {
      per_slide_items = remaining_length;
    }

    let inner_slide_item = [];
    for (let j = 0; j < per_slide_items; j++) {
      inner_slide_item.push(
        <div className="col-4" key={index}>
          <CategoryCard
            image={categories[index].image}
            title={categories[index].name}
            id={categories[index]._id}
          />
        </div>
      );
      index++;
    }

    if (i === 0) {
      indicators.push(
        <button
          key={i}
          type="button"
          data-bs-target="#category_slider_lg"
          data-bs-slide-to={i}
          className="active"
        ></button>
      );
      items.push(
        <div className="carousel-item active" key={i}>
          <div className="row">{inner_slide_item}</div>
        </div>
      );
    } else {
      indicators.push(
        <button
          key={i}
          type="button"
          data-bs-target="#category_slider_lg"
          data-bs-slide-to={i}
        ></button>
      );
      items.push(
        <div className="carousel-item" key={i}>
          <div className="row">{inner_slide_item}</div>
        </div>
      );
    }

    remaining_length = remaining_length - per_slide_items;
  }
  return {
    indicators: indicators,
    items: items,
  };
};

const getMediumScreenSlider = (categories) => {
  let length = categories.length;
  let indicators = [];
  let items = [];
  let slides_count;
  let per_slide_items;
  let remaining_length;
  let index;

  remaining_length = length;
  if (categories.length % 2 === 0) {
    slides_count = length / 2;
  } else {
    slides_count = parseInt(length / 2) + 1;
  }

  index = 0;
  for (let i = 0; i < slides_count; i++) {
    if (remaining_length > 2) {
      per_slide_items = 2;
    } else {
      per_slide_items = remaining_length;
    }

    let inner_slide_item = [];
    for (let j = 0; j < per_slide_items; j++) {
      inner_slide_item.push(
        <div className="col-6" key={index}>
          <CategoryCard
            image={categories[index].image}
            title={categories[index].name}
            id={categories[index]._id}
          />
        </div>
      );
      index++;
    }

    if (i === 0) {
      indicators.push(
        <button
          key={i}
          type="button"
          data-bs-target="#category_slider_md"
          data-bs-slide-to={i}
          className="active"
        ></button>
      );
      items.push(
        <div className="carousel-item active" key={i}>
          <div className="row">{inner_slide_item}</div>
        </div>
      );
    } else {
      indicators.push(
        <button
          key={i}
          type="button"
          data-bs-target="#category_slider_md"
          data-bs-slide-to={i}
        ></button>
      );
      items.push(
        <div className="carousel-item" key={i}>
          <div className="row">{inner_slide_item}</div>
        </div>
      );
    }

    remaining_length = remaining_length - per_slide_items;
  }

  return { indicators: indicators, items: items };
};

const getSmallScreenSlider = (categories) => {
  let length = categories.length;
  let indicators = [];
  let items = [];

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      indicators.push(
        <button
          key={`btn${i}`}
          type="button"
          data-bs-target="#category_slider_sm"
          data-bs-slide-to={i}
          className="active"
        ></button>
      );
      items.push(
        <div className="carousel-item active" key={`item${i}`}>
          <div className="row">
            <div className="col-12">
              <CategoryCard
                image={categories[i].image}
                title={categories[i].name}
                id={categories[i]._id}
              />
            </div>
          </div>
        </div>
      );
    } else {
      indicators.push(
        <button
          key={`btn${i}`}
          type="button"
          data-bs-target="#category_slider_sm"
          data-bs-slide-to={i}
        ></button>
      );
      items.push(
        <div className="carousel-item" key={`item${i}`}>
          <div className="row">
            <div className="row">
              <div className="col-12">
                <CategoryCard
                  image={categories[i].image}
                  title={categories[i].name}
                  id={categories[i]._id}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return { indicators: indicators, items: items };
};

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: SERVER_BASE_URL + "api/category/all",
    }).then(function (response) {
      if (response.statusText === "OK") {
        setCategories(response.data.data);
      }
    });
  }, []);

  const large_carousel = getLargeScreenSlider(categories);
  const medium_carousel = getMediumScreenSlider(categories);
  const small_carousel = getSmallScreenSlider(categories);

  return (
    <>
      <div
        id="category_slider_lg"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">{large_carousel.indicators}</div>
        <div className="carousel-inner">{large_carousel.items}</div>
      </div>

      <div
        id="category_slider_md"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">{medium_carousel.indicators}</div>
        <div className="carousel-inner">{medium_carousel.items}</div>
      </div>

      <div
        id="category_slider_sm"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">{small_carousel.indicators}</div>
        <div className="carousel-inner">{small_carousel.items}</div>
      </div>
    </>
  );
};

export default CategorySlider;
