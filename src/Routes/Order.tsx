import { IItemsData, getItems } from "Api/api";
import FooterBar from "Components/FooterBar";
import ItemCard from "Components/ItemCard";
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

const ItemContainer = styled.ul`
  overflow: auto;
  list-style: none;
  padding-left: 0;
  @media (min-width: 1024px) {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      height: 20%;
      background: #005673;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff;
    }
  }
`;

function Order() {
  const { isLoading, data: itemsData } = useQuery<IItemsData[]>(
    "itemList",
    getItems
  );

  return (
    <OrderContainer>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <ItemContainer>
          {itemsData?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ItemContainer>
      )}
      <FooterBar />
    </OrderContainer>
  );
}

export default Order;
