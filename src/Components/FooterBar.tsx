import { totalOrderInfoSelector } from "Store/atom";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const FootBarForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  z-index: 100;
  box-sizing: border-box;
  padding: 2rem;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: inherit;
  height: 20vh;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  box-shadow: 0 -4px 3px rgba(0, 0, 0, 0.5);
`;

const OrderButton = styled.button<IOrderButton>`
  border: none;
  background-color: ${(props) => (props.totalCount >= 1 ? "black" : "gray")};
  color: white;
  padding: 1.2rem;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
`;

interface IOrderButton {
  totalCount: number;
}

const SumBox = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

function FooterBar() {
  const { totalCount, totalPrice } = useRecoilValue(totalOrderInfoSelector);
  return (
    <FootBarForm>
      <SumBox>
        <div>총 수량: {totalCount}개</div>
        <div>총 가격: {totalPrice}원</div>
      </SumBox>
      <OrderButton totalCount={totalCount}>주문하기</OrderButton>
    </FootBarForm>
  );
}

export default FooterBar;
