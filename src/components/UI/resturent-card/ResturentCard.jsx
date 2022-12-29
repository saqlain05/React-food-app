import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

const ResturentCard = (props) => {
  const { id, title, image} = props.item;

  return (
    <div className="product__item">
      <div className="product__img">
      <Link to={`/resturents/${id}`}>
        <img src={image} alt="product-img" className="w-50" />
      </Link>
      </div>
      <div className="product__content">
        <h4>
          <Link to={`/resturents/${id}`}>{title}</Link>
        </h4>
      </div>
    </div>
  );
};

export default ResturentCard;
