import styled from "styled-components";

const OrderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  @media screen and (min-width: 1024px) {
    width: 48rem;
    max-width: 48rem;
  }
`;

const NavBar = styled.div`
  z-index: 100;
  background-color: black;
  position: sticky;
  top: 0;
  padding: 1rem;
`;

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

const ImgBox = styled.img`
  margin-left: 2rem;
`;

const OrderButton = styled.button`
  border: none;
  background-color: grey;
  color: white;
  padding: 1.2rem;
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: black;
    cursor: pointer;
  }
`;

const SumBox = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

function Order() {
  return (
    <OrderContainer>
      <NavBar>
        <ImgBox src="/icons/logo-black.png" alt="smallBanJangLogo" />
      </NavBar>

      <FootBarForm>
        <SumBox>
          <div>총 수량: 0개</div>
          <div>총 가격: 0원</div>
        </SumBox>
        <OrderButton>주문하기</OrderButton>
      </FootBarForm>
    </OrderContainer>
  );
}

export default Order;
