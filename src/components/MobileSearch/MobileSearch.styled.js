import styled from 'styled-components';
import { Icon } from 'images/svg/Icon';

export const IconStyled = styled(Icon)`
  fill: white;
  width: 24px;
  height: 24px;
`;

export const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 68px;
`;

export const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;

  &::placeholder {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 164%;
    color: #999;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 105%;
  padding: 0 16px;
  background-color: #1c69d4;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 171%;
  color: #fff;
`;
