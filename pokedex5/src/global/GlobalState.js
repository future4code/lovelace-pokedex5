import axios from "axios";
import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState();

  const getPokemonList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        console.log("foi", res.data);
        setPokemon(res.data.results);
      })
      .catch((error) => {
        console.log("não foi", error);
      });
  };

  const getPokemonDetail = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        console.log("foi", res.data);
        setDetails(res.data);
      })
      .catch((error) => {
        console.log("não foi", error);
      });
  };

  const state = { pokemon, details };
  const setters = { setPokemon, setDetails };
  const requests = { getPokemonList, getPokemonDetail };

  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
