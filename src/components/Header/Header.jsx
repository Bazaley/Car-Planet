import { Container } from 'components/Container/Container';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { MobileSearch } from 'components/MobileSearch/MobileSearch';
import {
  BurgerBox,
  HeaderRow,
  IconStyled,
  HeaderStyled,
  Aside,
  IconBasket,
  BurgerButton,
} from './Header.styled';
import { useState } from 'react';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <HeaderStyled>
      <Container>
        <HeaderRow>
          <BurgerBox>
            <BurgerButton onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? (
                <IconStyled id="close" />
              ) : (
                <IconStyled id="burger" />
              )}
            </BurgerButton>
            <p>trlm.ua</p>2
          </BurgerBox>
          <Aside>
            <button onClick={() => setOpenSearch(!openSearch)}>
              <IconStyled id="search" />
            </button>

            <IconStyled id="avatar" />
            <IconBasket id="basket" />
          </Aside>
          <MobileMenu openMenu={openMenu} />
          {openSearch && <MobileSearch setOpenSearch={setOpenSearch} />}
        </HeaderRow>
      </Container>
    </HeaderStyled>
  );
};
