import React from "react";
import { Link } from "react-router-dom";

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

function Card({ name, url }) {
  const [, id] = url.match(/pokemon\/(\d+)\//i);

  return (
    <Container>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
      />
      <Name>{name}</Name>
      <ButtonContainer>
        <Button>
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
