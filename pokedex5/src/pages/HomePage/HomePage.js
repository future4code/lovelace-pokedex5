import { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import GlobalContext from "../../global/GlobalContext";
import { Container, PokemonList } from "./styles";
import Pagination from "../../components/Pagination/Pagination";

function HomePage() {
  const { states, requests } = useContext(GlobalContext);

  useEffect(() => {
    requests.getPokemonList();
  }, [states.offset]);

  const renderPokemonList = () => {
    return states.pokemon?.map((pokemon) => {
      return <Card key={pokemon.name} url={pokemon.url} name={pokemon.name} />;
    });
  };

  console.log(states.offset)

  return (
    <Container>
      <Header title="Lista de Pokémon" />
      <PokemonList>{renderPokemonList()}</PokemonList>
      <Pagination />
    </Container>
  );
}

export default HomePage;
