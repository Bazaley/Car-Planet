import { MobileNav, Item, IconStyled } from './MobileMenu.styled';

export const MobileMenu = ({ openMenu }) => {
  return (
    <MobileNav open={openMenu}>
      <ul>
        <Item>
          Подбор запчастей
          <span>
            <IconStyled id="right-menu" />
          </span>
        </Item>
        <Item>
          Доставка
          <span>
            <IconStyled id="right-menu" />
          </span>
        </Item>
        <Item>
          Как купить
          <span>
            <IconStyled id="right-menu" />
          </span>
        </Item>
        <Item>
          Оплата
          <span>
            <IconStyled id="right-menu" />
          </span>
        </Item>
        <Item>
          Акции
          <span>
            <IconStyled id="right-menu" />
          </span>
        </Item>
        <Item>
          Контакты
          <span>
            <IconStyled id="right-menu" />
          </span>
        </Item>
        <Item>
          8-800-550-19-80{' '}
          <span>
            <IconStyled id="phone-menu" />
          </span>
        </Item>
      </ul>
    </MobileNav>
  );
};
