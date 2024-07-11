import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  // const [listLength, setListLength] = useState();
  // useEffect(() => {
  //   setListLength(store.favourites.length());
  // }, [store.favourites]);

  return (
    <nav className="navbar navbar-light bg-light mb-5">
      <div className="container">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKqvNZ45z8fmsvUey60HbORWwBhdFZNOHJQ&s"
            style={{ height: "75px" }}
          />
        </Link>
        <div className="ml-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favourites {store.favourites.length}
            </button>
            <ul className="dropdown-menu">
              {store.favourites.map((nameCard, index) => (
                <li className="d-flex align-items-center" key={index}>
                  <p className="dropdown-item" style={{ margin: "0" }} href="#">
                    {nameCard}
                  </p>
                  <i
                    onClick={() => actions.deleteTrash(nameCard)}
                    className="fas fa-trash-alt p-1"
                  ></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
