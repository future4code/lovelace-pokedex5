import axios from "axios";
import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import { baseURL } from "../constants/BaseUrl";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [details, setDetails] = useState();
  const [limit, setLimit] = useState(30);
  const [offset, setOffset] = useState(0);
  const [pokedex, setPokedex] = useState([]);

  const addToPokedex = (pokemon) => {
    const isPokemonAlreadyInPokedex = pokedex.some((pokemonInPokedex) => {
      return pokemonInPokedex.name === pokemon.name;
    });

    if (!isPokemonAlreadyInPokedex) {
      setPokedex([...pokedex, pokemon]);
      toast.success("Pokemon adicionado com sucesso!");
    }
  };

  const removeFromPokedex = (pokemon) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) => {
      return pokemonInPokedex.name !== pokemon.name;
    });
    setPokedex(newPokedex);
    toast.success("Pokemon removido com sucesso!");
  };

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

  const state = { pokemon, details, limit, offset, pokedex };
  const setters = {
    setPokemon,
    setDetails,
    setLimit,
    setOffset,
    setPokedex,
    addToPokedex,
    removeFromPokedex,
  };
  const requests = { getPokemonList, getPokemonDetail };

  return (
    <GlobalContext.Provider value={{ state, setters, requests }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
