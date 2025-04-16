import styled from 'styled-components';

import { Icon } from 'images/svg/Icon';

export const HeaderStyled = styled.header`
  padding: 18px 0;
  border-bottom: 1px solid #ddd;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const BurgerButton = styled.button`
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const IconStyled = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export const IconBasket = styled(Icon)`
  width: 24px;
  height: 32px;
`;

export const Aside = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;
