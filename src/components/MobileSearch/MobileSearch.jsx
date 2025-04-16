import { IconStyled, BoxSearch, Input, Button } from './MobileSearch.styled';

export const MobileSearch = ({ setOpenSearch }) => {
  return (
    <BoxSearch>
      <button onClick={() => setOpenSearch(false)}>
        <IconStyled id="close" />
      </button>

      <Input type="text" placeholder="Что ищите?" />
      <Button type="submit">
        <IconStyled id="search" />
        <span>Искать</span>
      </Button>
    </BoxSearch>
  );
};
