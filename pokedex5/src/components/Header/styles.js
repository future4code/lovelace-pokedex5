import { Link } from "react-router-dom";
import styled from "styled-components";

import { CgPokemon, CgPlayListSearch } from "react-icons/cg";

export const Container = styled.div`
  background-color: #d14629;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Logo = styled.img`
  width: 150px;
  height: 55px;

  @media (max-width: 768px) {
    width: 120px;
    height: auto;
  }
`;
export const Button = styled(Link)`
  text-decoration: none;
  color: #2b71b8;
  background-color: #f7c601;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s, background-color 0.15s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #d8b00d;
  }
`;
export const PokeIcon = styled(CgPokemon)`
  font-size: 20px;
  margin-right: 10px;
`;

export const ListIcon = styled(CgPlayListSearch)`
  font-size: 20px;
  margin-right: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #f7c601;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 25px;
    margin: 20px 0;
  }
`;
