import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    padding: 5px 20px;
    margin-bottom: 20px;

    color: #2b71b8;
    background-color: #f7c601;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    transition: transform 0.15s, background-color 0.15s ease;
    cursor: pointer;

    &:hover {
      cursor: pointer;
      background-color: #d8b00d;
    }
  }

  > ul {
    display: flex;
    justify-content: center;
    list-style: none;
    width: 100%;
    gap: 8px;
    > li + li {
      margin-left: 10px;
    }
  }
`;
