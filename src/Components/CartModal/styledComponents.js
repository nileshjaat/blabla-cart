import styled from 'styled-components';

export const CartModalWrapper = styled.div`
  width: 30%;
  height: 480%;
  z-index: 1000;
  display: block;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: -2px -2px 4px 2px #dddddd, 2px 2px 4px 2px #888888;
  position: absolute;
  top: 90%;
  right: 14%;
  padding: 16px;

  overflow: scroll;
`;

export const EmptyCartText = styled.h1`
  color: #666666;
  font-family: 'Public Sans';
  font-size: 22px;
  font-style: italic;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
`;
