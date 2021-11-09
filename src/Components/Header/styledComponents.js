import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #fafafa;
  box-shadow: -2px -2px 4px 2px #ffffff, 2px 2px 4px 2px #dddddd;
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const HeaderTitle = styled.h1`
  color: #333333;
  font-family: 'Public Sans';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImageContainer = styled.div`
  background-color: #fafafa;
  box-shadow: -2px -2px 4px 2px #ffffff, 2px 2px 4px 2px #dddddd;
  border-radius: 50%;
  margin-right: 16px;
`;

export const UserDetails = styled.h1`
  color: #444444;
  font-family: Comfortaa;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
`;

export const CartCount = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1%;
  right: 16%;
`;

export const CartCountText = styled.h1`
  color: #ffffff;
  font-family: Comfortaa;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
`;
