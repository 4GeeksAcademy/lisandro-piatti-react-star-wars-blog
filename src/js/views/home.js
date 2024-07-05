import React, { useEffect, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [planets, setPlanets] = useState();
  const [people, setPeople] = useState();
  const [films, setFilms] = useState();

  useEffect(() => {
    actions
      .swapiFetch("planets")
      .then((respomsePlanet) => setPlanets(respomsePlanet));
    actions
      .swapiFetch("people")
      .then((respomsePeolple) => setPeople(respomsePeolple));
    actions
      .swapiFetch("films")
      .then((respomsefilms) => setFilms(respomsefilms));
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!</h1>
      <Card uid={planets ? planets[2].uid : "Cargando..."} />
      <p>{planets ? planets[2].name : "Cargando..."}</p>
      <a href="#" className="btn btn-success">
        If you see this green button, bootstrap is working
      </a>
    </div>
  );
};
