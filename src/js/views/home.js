import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/Card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [planets, setPlanets] = useState();
  const [people, setPeople] = useState();
  const [vehicles, setVehicles] = useState();
  const [infoDetailsPlanets, setInfoDetailsPlanets] = useState([]);
  const [infoDetailsPeople, setInfoDetailsPeople] = useState([]);
  const [infoDetailsVehicles, setInfoDetailsVehicles] = useState([]);

  useEffect(() => {
    actions
      .swapiFetch("planets")
      .then((respomsePlanet) => setPlanets(respomsePlanet));
    actions
      .swapiFetch("people")
      .then((respomsePeolple) => setPeople(respomsePeolple));
    actions
      .swapiFetch("vehicles")
      .then((respomsefilms) => setVehicles(respomsefilms));
  }, []);

  useEffect(() => {
    if (people && people.results) {
      const fetchDetails = async () => {
        const detailsPromises = people.results.map((element) =>
          actions.getInfoDetails(element.url)
        );
        const details = await Promise.all(detailsPromises);
        setInfoDetailsPeople(details);
      };
      fetchDetails();
    }
  }, [people, actions]);

  useEffect(() => {
    if (planets && planets.results) {
      const fetchDetails = async () => {
        const detailsPromises = planets.results.map((element) =>
          actions.getInfoDetails(element.url)
        );
        const details = await Promise.all(detailsPromises);
        setInfoDetailsPlanets(details);
      };
      fetchDetails();
    }
  }, [planets, actions]);

  useEffect(() => {
    if (vehicles && vehicles.results) {
      const fetchDetails = async () => {
        const detailsPromises = vehicles.results.map((element) =>
          actions.getInfoDetails(element.url)
        );
        const details = await Promise.all(detailsPromises);
        setInfoDetailsVehicles(details);
      };
      fetchDetails();
    }
  }, [vehicles, actions]);

  return (
    <div className="text-center mt-5">
      <div className="container">
        {/* // planets info */}
        <h2 className="text-start">Planets</h2>
        <div
          className="d-flex overflow-auto mb-5 py-4"
          style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
        >
          {planets
            ? planets.results.map((element, index) => (
                <Card
                  key={element.uid}
                  img={`https://starwars-visualguide.com/assets/img/planets/${element.uid}.jpg`}
                  elementType="planets"
                  uid={element.uid}
                  title={element.name}
                  urlInfo={element.url}
                  CardDetailsA={
                    infoDetailsPlanets[index]
                      ? `Climate: ${infoDetailsPlanets[index].climate}`
                      : "Cargando..."
                  }
                  CardDetailsB={
                    infoDetailsPlanets[index]
                      ? `Terraine: ${infoDetailsPlanets[index].terrain}`
                      : "Cargando..."
                  }
                  CardDetailsC={
                    infoDetailsPlanets[index]
                      ? `Population: ${infoDetailsPlanets[index].population}`
                      : "Cargando..."
                  }
                />
              ))
            : "Cargando..."}

          <div className="my-auto">
            <button
              type="button"
              className="btn btn-primary d-block mb-4 mx-auto"
              style={{ maxHeight: "50px" }}
              onClick={() =>
                actions
                  .adjacentPage(planets.next)
                  .then((respomsePeolple) => setPlanets(respomsePeolple))
              }
            >
              {"Next page >>"}
            </button>
            <button
              type="button"
              className="btn btn-primary d-block "
              style={{ maxHeight: "50px" }}
              onClick={() =>
                actions
                  .adjacentPage(planets.previous)
                  .then((respomsePeolple) => setPlanets(respomsePeolple))
              }
            >
              {"Previous page <<"}
            </button>
          </div>
        </div>

        {/* // characters info */}
        <h2 className="text-start">Characters</h2>
        <div
          className="d-flex overflow-auto mb-5 py-4"
          style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
        >
          {people
            ? people.results.map((element, index) => (
                <Card
                  key={element.uid}
                  img={`https://starwars-visualguide.com/assets/img/characters/${element.uid}.jpg`}
                  elementType="people"
                  uid={element.uid}
                  title={element.name}
                  urlInfo={element.url}
                  CardDetailsA={
                    infoDetailsPeople[index]
                      ? `Gender: ${infoDetailsPeople[index].gender}`
                      : "Cargando..."
                  }
                  CardDetailsB={
                    infoDetailsPeople[index]
                      ? `Hair Color: ${infoDetailsPeople[index].hair_color}`
                      : "Cargando..."
                  }
                  CardDetailsC={
                    infoDetailsPeople[index]
                      ? `Eye Color: ${infoDetailsPeople[index].eye_color}`
                      : "Cargando..."
                  }
                />
              ))
            : "Cargando..."}

          <div className="my-auto">
            <button
              type="button"
              className="btn btn-primary d-block mb-4 mx-auto"
              style={{ maxHeight: "50px" }}
              onClick={() =>
                actions
                  .adjacentPage(people.next)
                  .then((respomsePeolple) => setPeople(respomsePeolple))
              }
            >
              {"Next page >>"}
            </button>
            <button
              type="button"
              className="btn btn-primary d-block "
              style={{ maxHeight: "50px" }}
              onClick={() =>
                actions
                  .adjacentPage(people.previous)
                  .then((respomsePeolple) => setPeople(respomsePeolple))
              }
            >
              {"Previous page <<"}
            </button>
          </div>
        </div>

        {/* // Vehicles info */}
        <h2 className="text-start">Vehicles</h2>
        <div
          className="d-flex overflow-auto mb-5 py-4"
          style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
        >
          {vehicles
            ? vehicles.results.map((element, index) => (
                <Card
                  key={element.uid}
                  img={`https://starwars-visualguide.com/assets/img/vehicles/${element.uid}.jpg`}
                  elementType="vehicles"
                  uid={element.uid}
                  title={element.name}
                  urlInfo={element.url}
                  CardDetailsA={
                    infoDetailsVehicles[index]
                      ? `Model: ${infoDetailsVehicles[index].model}`
                      : "Cargando..."
                  }
                  CardDetailsB={
                    infoDetailsVehicles[index]
                      ? `Length: ${infoDetailsVehicles[index].length}`
                      : "Cargando..."
                  }
                  CardDetailsC={
                    infoDetailsVehicles[index]
                      ? `Cargo Capacity: ${infoDetailsVehicles[index].cargo_capacity}`
                      : "Cargando..."
                  }
                />
              ))
            : "Cargando..."}

          <div className="my-auto">
            <button
              type="button"
              className="btn btn-primary d-block mb-4 mx-auto"
              style={{ maxHeight: "50px" }}
              onClick={() =>
                actions
                  .adjacentPage(vehicles.next)
                  .then((respomseVehicles) => setVehicles(respomseVehicles))
              }
            >
              {"Next page >>"}
            </button>
            <button
              type="button"
              className="btn btn-primary d-block "
              style={{ maxHeight: "50px" }}
              onClick={() =>
                actions
                  .adjacentPage(vehicles.previous)
                  .then((respomseVehicles) => setVehicles(respomseVehicles))
              }
            >
              {"Previous page <<"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
