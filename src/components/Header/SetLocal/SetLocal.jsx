import { FlagIcon, Button, City, Wrapper } from './SetLocal.styled';

export const SetLocal = () => {
  return (
    <Wrapper>
      <FlagIcon />
      <Button type="button">
        <City>Київ</City>
        <span>UA</span>
      </Button>
    </Wrapper>
  );
};
