import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ff6633;
  }
`;

export const List = styled.ul`
  list-style: none;

  @media screen and (max-width: 1575px) {
    display: none;
  }

  @media screen and (min-width: 1576px) {
    display: flex;
    align-items: center;
    gap: 48px;
  }
`;
