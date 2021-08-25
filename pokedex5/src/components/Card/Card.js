import React from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../global/GlobalContext";
import { useContext } from "react";

import {
  Container,
  Image,
  ButtonContainer,
  Button,
  Details,
  Name,
  Add,
  Plus,
} from "./styles";

function Card({ name, url, pokemon }) {
  const [, id] = url.match(/pokemon\/(\d+)\//i);
  const { states, setters } = useContext(GlobalContext);

  return (
    <Container>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
      />
      <Name>{name}</Name>
      <ButtonContainer>
        <Button onClick={() => setters.addToPokedex(pokemon)}>
          <Add />
          Adicionar
        </Button>
        <Details as={Link} to={`/details/${id}`}>
          <Plus />
          Detalhes
        </Details>
      </ButtonContainer>
    </Container>
  );
}

export default Card;
