import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, PokemonList } from "./styles";

function HomePage() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        console.log("foi", res.data);
        setPokemon(res.data.results);
      })
      .catch((error) => {
        console.log("não foi", error);
      });
  }, []);

  const renderPokemonList = () => {
    return pokemon.map((pokemon) => {
      return <Card url={pokemon.url} name={pokemon.name} />;
    });
  };

  return (
    <Container>
      <Header title="Lista de Pokémon" />
      <PokemonList>{renderPokemonList()}</PokemonList>
    </Container>
  );
}

export default HomePage;
