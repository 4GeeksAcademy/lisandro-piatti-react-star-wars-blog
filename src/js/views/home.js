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
  const [infoDetails, setInfoDetails] = useState();

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
      {/* obteniendo info de next page */}
      <p>{`Next page: ${planets ? planets.next : "Cargando..."}`}</p>

      {/* obteniendo info de previous page */}
      <p>{`Previous page: ${planets ? planets.previous : "Cargando..."}`}</p>

      {/* renderizar componente Card, pasando props */}
      {/* <Card
        uid={planets ? planets.results[2].uid : "Cargando..."}
        title={planets ? planets.results[2].name : "Cargando..."}
        urlInfo={planets ? planets.results[2].url : "Cargando..."}
      /> */}

      {/* obteniendo un dato especifico */}
      <p>{planets ? planets.results[2].name : "Cargando..."}</p>

      {/* comienzo del proyecto */}
      <div className="container">
        <h2 className="text-start">Characters</h2>
        <div
          className="d-flex overflow-auto mb-5 py-4"
          style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
        >
          {people
            ? people.results.map((element, index) => {
                actions.getInfoDetails(element.url);

                // .then((responseDetails) =>
                //   setInfoDetails((prevState) => [
                //     ...prevState,
                //     responseDetails,
                //   ])
                // );

                return (
                  <Card
                    key={element.uid}
                    img={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`}
                    uid={element.uid}
                    title={element.name}
                    urlInfo={element.url}
                    // CardDetailsA={
                    //   infoDetails
                    //     ? `Gender: ${infoDetails[index].gender}`
                    //     : "Cargando..."
                    // }
                  />
                );
              })
            : "cargando..."}

          <div className="my-auto">
            <button
              type="button"
              className="btn btn-primary d-block mb-4 mx-auto"
              style={{ maxHeight: "50px" }}
            >
              {"Next page >>"}
            </button>
            <button
              type="button"
              className="btn btn-primary d-block "
              style={{ maxHeight: "50px" }}
            >
              {"Previous page <<"}
            </button>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-success">
        If you see this green button, bootstrap is working
      </a>
    </div>
  );
};
