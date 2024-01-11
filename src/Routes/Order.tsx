import FooterBar from "Components/FooterBar";
import NavBar from "Components/NavBar";
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

function Order() {
  return (
    <OrderContainer>
      <NavBar />
      <FooterBar />
    </OrderContainer>
  );
}

export default Order;
