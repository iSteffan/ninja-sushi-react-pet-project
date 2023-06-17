import { ReactComponent as Flag } from '../../../images/ukr-flag.svg';
import styled from 'styled-components';

export const FlagIcon = styled(Flag)`
  @media screen and (min-width: 320px) {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 1576px) {
    width: 30px;
    height: 30px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;

  font-weight: 500;
  background-color: inherit;
  border: 0;

  @media screen and (max-width: 1575px) {
    font-size: 12px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1576px) {
    font-size: 16px;
    line-height: 1.5;
    cursor: pointer;
  }

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ff6633;
  }
`;

export const City = styled.span`
  @media screen and (max-width: 1575px) {
    margin-right: 6px;
    margin-left: 6px;
  }

  @media screen and (min-width: 1576px) {
    margin-right: 12px;
    margin-left: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1576px) {
    width: 150px;
  }
`;
