import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CompleteContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`;

const CompleteIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

function Complete() {
  const navigate = useNavigate();

  // 3초 후 오더 페이지
  useEffect(() => {
    setTimeout(() => {
      navigate("/order");
    }, 3000);
  }, []);

  return (
    <CompleteContainer>
      <CompleteIcon src="/icons/CheckFilled.png" alt="completeIcon" />
      <span>주문이 완료되었습니다.</span>
    </CompleteContainer>
  );
}

export default Complete;
