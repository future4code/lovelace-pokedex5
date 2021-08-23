import React from "react";
import { Link } from "react-router-dom";

import { Container, Logo, Title } from "./styles";
import PokemonLogo from "../../images/pokemon-logo.svg";

function Header({ title, button }) {
  return (
    <Container>
      <Link to="/">
        <Logo src={PokemonLogo} />
      </Link>

      <Title>{title}</Title>

      {button}
    </Container>
  );
}

export default Header;
