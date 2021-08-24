import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  border: 2px solid #2b71b8;
  border-radius: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    border: none;
    gap: 20px;
  }
`;
export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  border-right: 1px solid #2b71b8;
  min-height: 250px;

  @media (max-width: 768px) {
    border: 2px solid #2b71b8;
    padding: 30px;
    border-radius: 20px;
  }
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

  @media (max-width: 768px) {
    border: 2px solid #2b71b8;
    padding: 30px;
    border-radius: 20px;
  }
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

  @media (max-width: 768px) {
    border: 2px solid #2b71b8;
    padding: 30px;
    border-radius: 20px;
  }
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

  @media (max-width: 768px) {
    border: 2px solid #2b71b8;
    padding: 30px;
    border-radius: 20px;
  }
`;
export const Attacks = styled.div`
  text-transform: capitalize;
`;
