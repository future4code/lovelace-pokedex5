import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Logo,
  PokeIcon,
  Title,
  ButtonContainer,
  ListIcon,
} from "./styles";
import PokemonLogo from "../../images/pokemon-logo.svg";

function Header({ title }) {
  return (
    <Container>
      <Link to="/">
        <Logo src={PokemonLogo} />
      </Link>
      <Title>{title}</Title>
      <ButtonContainer>
        <Button as={Link} to="/">
          <ListIcon />
          Lista de Pokémon
        </Button>
        <Button as={Link} to="/pokedex">
          <PokeIcon />
          Pokedex
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Header;
