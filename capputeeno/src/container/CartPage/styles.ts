import { theme } from '@/styles/theme';
import styled, { css } from 'styled-components';

export const Flex = styled.div`
  @media (min-width: 1212px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3.2rem;
    font-style: normal;
  }
`;

export const CartItens = styled.div`
  padding-top: 4.4rem;
  color: ${theme.colors.products};
  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 150%;
    padding-bottom: 0.6rem;
  }
  p {
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 150%;
    padding-bottom: 2.3rem;
    span {
      font-weight: 600;
    }
  }
  @media (min-width: 768px) {
    width: 73.6rem;
  }
`;

export const BuyProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  color: ${theme.colors.products};
  background-color: ${theme.colors.white};
  @media (min-width: 768px) {
    width: 100%;
    height: 70rem;
  }
  h2 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 150%;
    padding-bottom: 2.9rem;
  }
  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.4rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.border};
  margin-bottom: 0.8rem;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;
  p {
    font-weight: 600;
  }
`;

export const Purchase = styled.div`
  display: flex;
  justify-content: center;
`;

export const PurchaseButton = styled.button`
  ${({ disabled }) => css`
    width: 30.3rem;
    height: 4.4rem;
    cursor: ${disabled ? 'default' : 'pointer'};
    border: none;
    background: ${disabled ? theme.background.gray : theme.background.green};
    mix-blend-mode: multiply;
    border-radius: 0.4rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.light};
  `}
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  a {
    font-size: 1.4rem;
    font-family: Saira;
    font-weight: 500;
    line-height: 150%;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: ${theme.colors.gray};
    padding-bottom: 1.2rem;
  }
`;
