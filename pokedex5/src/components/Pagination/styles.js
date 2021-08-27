import styled from "styled-components";
import { Button as CardButton } from "../Card/styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  > ul {
    display: flex;
    justify-content: center;
    list-style: none;
    width: 100%;
    gap: 8px;
    > li + li {
      margin-left: 10px;
    }

    @media (max-width: 767px) {
      > li {
        display: none;

        &.next,
        &.previous {
          display: block;
        }
      }
    }
  }
`;

export const Button = styled(CardButton)`
  padding: 5px 20px;
  margin-bottom: 20px;
`;
