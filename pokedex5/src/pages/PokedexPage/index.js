import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Button, PokeIcon } from "../../components/Header/styles";

function PokedexPage() {
  return (
    <div>
      <Header
        title="Pokedex"
        button={
          <Button as={Link} to="/">
            <PokeIcon />
            Ir para lista de pokemon
          </Button>
        }
      />
      <h1>Pokedex</h1>
    </div>
  );
}

export default PokedexPage;
