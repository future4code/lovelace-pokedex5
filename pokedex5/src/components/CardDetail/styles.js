import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 2px solid #2b71b8;
  border-radius: 20px;
  padding: 20px;
`;
export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  border-right: 1px solid #2b71b8;
  min-height: 250px;
`;
export const Name = styled.h2`
  color: #2b71b8;
  text-transform: capitalize;
`;
export const FrontImage = styled.img``;

export const BackImage = styled.img``;

export const PowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  border-right: 1px solid #2b71b8;
  min-height: 250px;
`;
export const TitleContainer = styled.h2`
  color: #2b71b8;
`;
export const PowerDetails = styled.div`
text-transform: capitalize;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  border-right: 1px solid #2b71b8;
  min-height: 250px;
`;
export const Types = styled.div`
text-transform: capitalize;
`;

export const AttackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  min-height: 250px;
`;
export const Attacks = styled.div`
text-transform: capitalize;
`;
