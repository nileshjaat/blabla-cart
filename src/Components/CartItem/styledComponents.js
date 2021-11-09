import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  box-shadow: -2px -2px 4px 2px #dddddd, 2px 2px 4px 2px #888888;
  margin-bottom: 16px;
  border-radius: 8px;
  padding: 4px;
`;

export const ItemDetails = styled.div`
  display: flex;
  margin-left: 8px;
  align-items: flex-end;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.h1`
  color: #000000;
  font-family: 'Public Sans';
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  margin: 0;
`;

export const ItemQuantity = styled.h1`
  color: #666666;
  font-family: 'Public Sans';
  font-size: 16px;
  font-style: italic;
  letter-spacing: 0;
  line-height: 21px;
  margin: 0 8px 0 0;
`;

export const ItemQuantityContainer = styled.h1`
  display: flex;
  align-items: center;
`;

export const ItemQuantityNumber = styled.h1`
  color: #666666;
  font-family: 'Public Sans';
  font-size: 18px;
  font-style: italic;
  letter-spacing: 0;
  line-height: 21px;
  margin: 0 16px;
`;
