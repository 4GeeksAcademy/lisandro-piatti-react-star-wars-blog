import React, { useState, useEffect, useContext } from "react";
import PropTypes, { elementType } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const {
    elementType,
    uid,
    title,
    img,
    urlInfo,
    CardDetailsA,
    CardDetailsB,
    CardDetailsC,
  } = props;

  const imageDefault = (e) => {
    return (e.target.src =
      "https://starwars-visualguide.com/assets/img/placeholder.jpg");
  };

  return (
    <div className="card text-start me-5" style={{ minWidth: "400px" }}>
      <img
        src={img}
        onError={(e) => imageDefault(e)}
        className="card-img-top img-fluid"
        alt="card image"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{CardDetailsA}</p>
        <p className="card-text">{CardDetailsB}</p>
        <p className="card-text">{CardDetailsC}</p>

        <div className="d-flex justify-content-between">
          <Link to={`/${elementType}/${uid}`}>
            <button className="btn btn-primary">Learn More!</button>
          </Link>
          <button
            className="btn btn-outline-warning"
            onClick={(e) => actions.favouritesAction(title)}
          >
            <i
              className={
                actions.heartColour(title) ? "fas fa-heart" : "far fa-heart"
              }
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};
