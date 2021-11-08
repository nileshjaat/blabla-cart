import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #ffffff;
  border-radius: 8px;
  background-color: #f1f1f1;
  box-shadow: -4px -4px 8px 0 rgba(255, 255, 255, 0.2),
    4px 4px 8px 0 rgba(170, 170, 170, 0.2);
  display: flex;
  margin-top: 4px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fafafa;
  box-shadow: -2px -2px 4px 2px #ffffff, 2px 2px 4px 2px #dddddd;
`;

export const Category = styled.div`
  cursor: pointer;
  padding: 16px 0 16px 24px;
`;

export const CategoryName = styled.h1`
  color: #999999;
  font-family: 'Public Sans';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
`;

export const Tab = styled.div`
  display: flex;
  position: relative;
`;

export const ProductsTitle = styled.h1`
  color: #666666;
  font-family: 'Public Sans';
  font-size: 34px;
  font-style: italic;
  letter-spacing: 0;
  line-height: 21px;
  margin: 48px 16px;
`;

export const ProductsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
