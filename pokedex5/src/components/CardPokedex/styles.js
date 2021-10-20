import styled from "styled-components";
import { CgRemove } from "react-icons/cg";

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

export const ImageContainer = styled.div`
  max-height: 100px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
export const Name = styled.p`
  text-transform: capitalize;
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
`;

export const RemoveIcon = styled(CgRemove)`
  margin-right: 10px;
`;
