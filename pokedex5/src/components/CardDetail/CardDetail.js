import React from "react";

import {
  Container,
  ImagesContainer,
  Name,
  FrontImage,
  BackImage,
  PowerContainer,
  TitleContainer,
  PowerDetails,
  TypeContainer,
  Types,
  AttackContainer,
  Attacks,
} from "./styles";

function CardDetail({ name, frontImage, backImage, stats, types, abilities }) {
  const renderStats = () => {
    return stats.map(({ base_stat, stat }) => (
      <p key={stat.name}>
        {stat.name}: {base_stat}
      </p>
    ));
  };

  const renderTypes = () => {
    return types.map(({ name, type }) => {
      return <p key={name}>{type.name}</p>;
    });
  };

  const renderAbilities = () => {
    return abilities.map(({ ability, name }) => {
      return <p key={name}>{ability.name}</p>;
    });
  };

  return (
    <Container>
      <ImagesContainer>
        <Name>{name}</Name>
        <FrontImage src={frontImage} />
        <BackImage src={backImage} />
      </ImagesContainer>
      <PowerContainer>
        <TitleContainer>Poderes</TitleContainer>
        <PowerDetails>{renderStats()}</PowerDetails>
      </PowerContainer>
      <TypeContainer>
        <TitleContainer>Tipos</TitleContainer>

        <Types>{renderTypes()}</Types>
      </TypeContainer>
      <AttackContainer>
        <TitleContainer>Habilidades</TitleContainer>
        <Attacks>{renderAbilities()}</Attacks>
      </AttackContainer>
    </Container>
  );
}

export default CardDetail;
