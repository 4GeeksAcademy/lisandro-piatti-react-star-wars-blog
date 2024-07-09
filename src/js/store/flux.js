const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getInfoDetails: async (urlForFetch) => {
        try {
          let response = await fetch(urlForFetch);
          if (!response.ok) {
            console.error(`Error Request: ${response.status}`);
            return;
          }
          let data = await response.json();

          console.log(data.result.properties);
          return data.result.properties;
        } catch (error) {
          console.error(`Promise error: ${error}`);
        }
      },

      swapiFetch: async (elementType) => {
        //https://swapi.tech/api/people
        try {
          let resp = await fetch(`https://swapi.tech/api/${elementType}`);
          if (!resp.ok) {
            console.error(`Error en la peticion: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          console.log(data);
          return data;
        } catch (error) {
          console.error(`Error en la promesa: ${error}`);
          return;
        }
      },

      adjacentPage: async (urlFetch) => {
        try {
          let resp = await fetch(urlFetch);
          if (!resp.ok) {
            console.error(`Error en la peticion: ${resp.status}`);
            return;
          }
          let data = await resp.json();
          console.log(data);
          return data;
        } catch (error) {
          console.error(`Error en la promesa: ${error}`);
          return;
        }
      },
    },
  };
};

export default getState;
