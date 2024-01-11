import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  color: #fff;
  background-color: #000;
`;

const LoginButton = styled.button`
  background-color: white;
  padding: 1.2rem;
  margin-top: 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <img src="/icons/logo-black-1.png" alt="banJangLogo" />
      <Link to={`/order`}>
        <LoginButton>주문하러 가기</LoginButton>
      </Link>
    </HomeContainer>
  );
}

export default Home;
