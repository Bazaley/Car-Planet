import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: 640px) {
    max-width: 580px;
  }

  @media screen and (min-width: 960px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1220px;
  }

  @media screen and (min-width: 1600px) {
    max-width: 1540px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1860px;
  }
`;
