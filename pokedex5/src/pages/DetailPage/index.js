import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail";
import Header from "../../components/Header";
import { Button, PokeIcon } from "../../components/Header/styles";

import { DetailsContainer } from "./styles";

function DetailPage() {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        console.log("foi", res.data);
        setDetails(res.data);
      })
      .catch((error) => {
        console.log("não foi", error);
      });
  }, [id]);

  const renderDetails = () => {
    if (!details) return null;

    return (
      <CardDetail
        url={"url"}
        name={details.name}
        backImage={details.sprites?.back_default}
        frontImage={details.sprites?.front_default}
        stats={details.stats}
        types={details.types}
        abilities={details.abilities}
      />
    );
  };

  return (
    <div>
      <Header
        title="Detalhes"
        button={
          <Button as={Link} to="/pokedex">
            <PokeIcon />
            Ir para pokedex
          </Button>
        }
      />
      <DetailsContainer>{renderDetails()}</DetailsContainer>
    </div>
  );
}

export default DetailPage;
