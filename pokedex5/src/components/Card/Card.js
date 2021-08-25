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
import { ImageContainer } from "../CardPokedex/styles";

function Card({ name, url, pokemon }) {
  const [, id] = url.match(/pokemon\/(\d+)\//i);
  const { setters, state } = useContext(GlobalContext);

  const isDisabled = state.pokedex.some((p) => p.name === name);

  return (
    <Container>
      <ImageContainer>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <ButtonContainer>
        <Button
          disabled={isDisabled}
          onClick={() => setters.addToPokedex(pokemon)}
        >
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
