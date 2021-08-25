import axios from "axios";
import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import { baseURL } from '../constants';


const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState();
  const [limit, setLimit] = useState(30)
  const [offset, setOffset] = useState(0)

  const getPokemonList = () => {
    axios
      .get(`${baseURL}?offset=${offset}&limit=${limit}`)
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
      .get(`${baseURL}/${id}`)
      .then((res) => {
        console.log("foi", res.data);
        setDetails(res.data);
      })
      .catch((error) => {
        console.log("não foi", error);
      });
  };

  const states = { pokemon, details, limit, offset };
  const setters = { setPokemon, setDetails, setLimit, setOffset };
  const requests = { getPokemonList, getPokemonDetail };

  return (
    <GlobalContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
