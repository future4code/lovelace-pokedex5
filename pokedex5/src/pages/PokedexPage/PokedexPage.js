import Header from "../../components/Header/Header";
import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import CardPokedex from "../../components/CardPokedex/CardPokedex";
import { ContainerPokedex, Message, Button, BackIcon } from "./styles";
import { Link } from "react-router-dom";

function PokedexPage() {
  const { state } = useContext(GlobalContext);

  const renderPokedex = () => {
    if (state.pokedex.length === 0) {
      return <Message>A sua pokedex está vazia! </Message>;
    }

    return (
      <ContainerPokedex>
        {state.pokedex?.map((item) => {
          return <CardPokedex name={item.name} pokemon={item} url={item.url} />;
        })}
      </ContainerPokedex>
    );
  };

  return (
    <div>
      <Header title="Pokedex" />
      <Button as={Link} to="/">
        <BackIcon />
        Voltar
      </Button>
      {renderPokedex()}
    </div>
  );
}

export default PokedexPage;
