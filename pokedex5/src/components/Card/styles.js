import { Link } from "react-router-dom";
import styled from "styled-components";

import { CgAdd, CgMathPlus } from "react-icons/cg";

export const Add = styled(CgAdd)`
  margin-right: 10px;
`;
export const Plus = styled(CgMathPlus)`
  margin-right: 10px;
`;
export const Container = styled.div`
  border: 2px solid #2b71b8;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Image = styled.img``;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Button = styled.button`
  padding: 10px 30px;
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
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #d8b00d;
  }

  &:disabled {
    color: #000;
    cursor: default;
    background-color: #abaaa8;

    &:hover {
      transform: scale(1);
      background-color: #abaaa8;
    }
  }
`;
export const Details = styled(Link)`
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

  &:hover {
    transform: scale(1.1);
    background-color: #d8b00d;
  }
`;
export const Name = styled.p`
  font-size: 20px;
  text-transform: capitalize;
`;
