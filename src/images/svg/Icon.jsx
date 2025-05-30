import Icons from './sprite.svg';

export const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={Icons + '#icon-' + id}></use>
    </svg>
  );
};
