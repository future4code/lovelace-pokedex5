import { Link } from "react-router-dom";
import styled from "styled-components";

import { CgChevronLeft } from "react-icons/cg";

export const ContainerPokedex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 40px;
`;

export const Message = styled.h2`
  text-align: center;
  margin: 40px 0;
`;

export const Button = styled(Link)`
  padding: 10px 30px;
  text-decoration: none;
  color: #2b71b8;
  background-color: #f7c601;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s, background-color 0.15s ease;
  width: max-content;
  margin: 40px 0 0 40px;

  &:hover {
    transform: scale(1.1);
    background-color: #d8b00d;
  }
`;

export const BackIcon = styled(CgChevronLeft)`
  margin-right: 10px;
`;
