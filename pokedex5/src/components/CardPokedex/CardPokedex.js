import { useContext } from "react";
import React from "react";
import GlobalContext from "../../global/GlobalContext";

import {
  Container,
  Image,
  Name,
  Button,
  RemoveIcon,
  ImageContainer,
} from "./styles";

export default function CardPokedex({ pokemon, name, url }) {
  const { setters } = useContext(GlobalContext);
  const [, id] = url.match(/pokemon\/(\d+)\//i);

  return (
    <Container>
      <ImageContainer>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Button onClick={() => setters.removeFromPokedex(pokemon)}>
        <RemoveIcon />
        Remover
      </Button>
    </Container>
  );
}
