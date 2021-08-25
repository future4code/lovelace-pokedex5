import { useContext } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import GlobalContext from "../../global/GlobalContext";
import { Container, PokemonList } from "./styles";

function HomePage() {
  const { state } = useContext(GlobalContext);

  const renderPokemonList = () => {
    return state.pokemon?.map((pokemon) => {
      return <Card key={pokemon.name} url={pokemon.url} name={pokemon.name} />;
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
