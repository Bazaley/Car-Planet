import styled from 'styled-components';
import { Icon } from 'images/svg/Icon';

export const MobileNav = styled.nav`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 68px;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: 0.3s;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 24px 42px;
  border-bottom: 1px solid #ddd;

  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: #333;
  cursor: pointer;
  transition: color linear 500ms;

  &:hover {
    font-weight: 700;
    color: #555;
  }
`;

export const IconStyled = styled(Icon)`
  fill: black;
  width: 24px;
  height: 24px;
`;
