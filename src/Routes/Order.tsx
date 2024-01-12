import { getItems } from "Api/api";
import FooterBar from "Components/FooterBar";
import Loading from "Components/Loading";
import NavBar from "Components/NavBar";
import { useQuery } from "react-query";
import styled from "styled-components";

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  @media screen and (min-width: 1024px) {
    width: 48rem;
    max-width: 48rem;
  }
`;

interface IItemsData {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
}

function Order() {
  const { isLoading, data: itemsData } = useQuery<IItemsData[]>(
    "itemList",
    getItems
  );
  console.log(isLoading, itemsData, "로ㅓ딩중?");

  return (
    <OrderContainer>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {itemsData?.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
      <FooterBar />
    </OrderContainer>
  );
}

export default Order;
