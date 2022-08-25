import "./PageTitle.scss";

const PageTitle = (props) => {
  return (
    <div className="container-fluid p-0 page-title">
      <h1 className="title">{props.title}</h1>
      <div className="overlay"></div>
      <img
        src="https://res.cloudinary.com/dcwobtmhv/image/upload/v1661413222/bg1_fm8fzh.jpg"
        alt="Page Title"
        width="100%"
      />
    </div>
  );
};

export default PageTitle;
