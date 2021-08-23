import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Button, PokeIcon } from "../../components/Header/styles";

function DetailPage() {
  return (
    <div>
      <Header
        title="Detalhes"
        button={
          <Button as={Link} to="/">
            <PokeIcon />
            Voltar
          </Button>
        }
      />

      <h1>Detalhes</h1>
    </div>
  );
}

export default DetailPage;
