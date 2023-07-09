import styled from 'styled-components';
import { ReactComponent as Bell } from '../../../images/bell.svg';
import { ReactComponent as Favorite } from '../../../images/favorite.svg';
import { ReactComponent as User } from '../../../images/user.svg';

export const BellIcon = styled(Bell)`
  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1576px) {
    width: 24px;
    height: 24px;
  }
`;

export const FavoriteIcon = styled(Favorite)`
  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1576px) {
    width: 24px;
    height: 24px;
  }
`;

export const UserIcon = styled(User)`
  @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1576px) {
    width: 24px;
    height: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  border-radius: 12px;
  border: 1px solid #d2d2d7;
  background-color: transparent;
  /* @media screen and (min-width: 320px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1576px) {
    width: 24px;
    height: 24px;
  } */
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  /* @media screen and (max-width: 1575px) {
    display: none;
  }

  @media screen and (min-width: 1576px) {
    display: flex;
    align-items: center;
    gap: 48px;
  } */
`;
