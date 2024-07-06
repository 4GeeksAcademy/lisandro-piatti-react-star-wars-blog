import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { uid, title, img, urlInfo, CardDetailsA, CardDetailsB, CardDetailsC } =
    props;

  return (
    <div className="card text-start me-5" style={{ minWidth: "400px" }}>
      <img src={img} className="card-img-top img-fluid" alt="card image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{urlInfo}</p>
        <p className="card-text">{CardDetailsA}</p>
        <p className="card-text">{CardDetailsB}</p>
        <p className="card-text">{CardDetailsC}</p>
        <p className="card-text">{`Id Card: ${uid}`}</p>

        <div className="d-flex justify-content-between">
          <Link>
            <button className="btn btn-primary">Learn More!</button>
          </Link>
          <button className="btn btn-outline-warning">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
