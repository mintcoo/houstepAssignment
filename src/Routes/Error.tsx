import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`;

function Error() {
  const navigate = useNavigate();

  // 3초 후 오더 페이지
  useEffect(() => {
    setTimeout(() => {
      navigate("/order");
    }, 3000);
  }, []);

  return (
    <ErrorContainer>
      <span>주문에 실패하였습니다.</span>
      <span>다시 시도해주세요.</span>
    </ErrorContainer>
  );
}

export default Error;
