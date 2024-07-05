import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  return <div>{`este es tu id:${props.uid}`}</div>;
};
