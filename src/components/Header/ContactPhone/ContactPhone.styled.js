import { ReactComponent as Phone } from '../../../images/phone.svg';
import styled from 'styled-components';

export const PhoneIcon = styled(Phone)`
  width: 24px;
  height: 24px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;

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
