import "./PageTitle.scss";

const PageTitle = (props) => {
  return (
    <div className="container-fluid p-0 page-title">
      <h1 className="title">{props.title}</h1>
      <div className="overlay"></div>
      <img
        src="../assets/images/home_slider/bg1.jpg"
        alt="Page Title"
        width="100%"
      />
    </div>
  );
};

export default PageTitle;
