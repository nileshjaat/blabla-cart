import styled from 'styled-components';

export const Item = styled.div`
  border-radius: 8px;
  background-color: #f1f1f1;
  box-shadow: -4px -4px 8px 0 rgba(255, 255, 255, 0.2),
    4px 4px 8px 0 rgba(170, 170, 170, 0.2);
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 16px;
`;

export const ProductItemName = styled.h1`
  color: #000000;
  font-family: 'Public Sans';
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  background: linear-gradient(180deg, #e02124 0%, #971b13 100%);
  box-shadow: -2px -2px 4px 2px #ffffff, 2px 2px 4px 2px #dddddd;
`;

export const ButtonText = styled.h1`
  color: #ffffff;
  font-family: 'Public Sans';
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
`;
