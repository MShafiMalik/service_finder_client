import "./ServiceDetail.scss";

const Packages = (props) => {
  console.log(props.packages.basic);
  return (
    <>
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <a
            href={`#${props.pre_id}basic`}
            className="nav-link active font-w-700"
            data-bs-toggle="tab"
          >
            Basic
          </a>
        </li>
        <li className="nav-item">
          <a
            href={`#${props.pre_id}standard`}
            className="nav-link font-w-700"
            data-bs-toggle="tab"
          >
            Standard
          </a>
        </li>
        <li className="nav-item">
          <a
            href={`#${props.pre_id}premium`}
            className="nav-link font-w-700"
            data-bs-toggle="tab"
          >
            Premium
          </a>
        </li>
      </ul>
      <div className="tab-content pt-3 border border-top-0">
        <div className="tab-pane fade show active" id={`${props.pre_id}basic`}>
          <div className="px-3">
            <h5>{props.packages.basic.name}</h5>
            <p>
              <small>{props.packages.basic.description}</small>
            </p>
            <h6>Features</h6>
            <ul className="ps-3">
              {props.packages.basic.features.map((feature, i) => {
                return <li key={i}>{feature}</li>;
              })}
            </ul>
          </div>
          <h5 className="text-center font-w-600 package-price">
            ${props.packages.basic.price}
          </h5>
        </div>
        <div className="tab-pane fade" id={`${props.pre_id}standard`}>
          <div className="px-3">
            <h5>{props.packages.standard.name}</h5>
            <p>
              <small>{props.packages.standard.description}</small>
            </p>
            <h6>Features</h6>
            <ul className="ps-3">
              {props.packages.standard.features.map((feature, i) => {
                return <li key={i}>{feature}</li>;
              })}
            </ul>
          </div>
          <h5 className="text-center font-w-600 package-price">
            ${props.packages.standard.price}
          </h5>
        </div>
        <div className="tab-pane fade" id={`${props.pre_id}premium`}>
          <div className="px-3">
            <h5>{props.packages.premium.name}</h5>
            <p>
              <small>{props.packages.premium.description}</small>
            </p>
            <h6>Features</h6>
            <ul className="ps-3">
              {props.packages.premium.features.map((feature, i) => {
                return <li key={i}>{feature}</li>;
              })}
            </ul>
          </div>
          <h5 className="text-center font-w-600 package-price">
            ${props.packages.premium.price}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Packages;
