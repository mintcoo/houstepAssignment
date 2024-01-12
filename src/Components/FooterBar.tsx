import { postItems } from "Api/api";
import { selectOrderListState, totalOrderInfoSelector } from "Store/atom";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

const FootBarForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

const OrderButton = styled.button`
  border: none;
  background-color: ${(props) => props.color};
  color: white;
  padding: 1.2rem;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
`;

const SumBox = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  @media screen and (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

function FooterBar() {
  const navigate = useNavigate();
  const setSelectOrderList = useSetRecoilState(selectOrderListState);
  const { totalCount, totalPrice } = useRecoilValue(totalOrderInfoSelector);
  // ------ 임시 주문 api요청 코드 ------
  const { isLoading, mutate } = useMutation(postItems, {
    // 요청 성공시
    onSuccess: () => {
      navigate("/complete");
    },
    // 요청 실패시
    onError: () => {
      navigate("/error");
    },
  });
  // ------ 주문 클릭 시 ------
  const onSubmitOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 주문 개수 1이상 일때 주문 가능
    if (totalCount >= 1) {
      mutate(true);
      // 주문리스트 비우기
      setSelectOrderList([]);
    }
  };
  return (
    <FootBarForm onSubmit={onSubmitOrder}>
      <SumBox>
        <div>총 수량: {totalCount}개</div>
        <div>총 가격: {totalPrice}원</div>
      </SumBox>
      {/* 주문 버튼  */}
      <OrderButton color={totalCount >= 1 ? "black" : "gray"}>
        {isLoading ? "주문중..." : "주문하기"}
      </OrderButton>
    </FootBarForm>
  );
}

export default FooterBar;
