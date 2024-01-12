import { IItemsData } from "Api/api";
import styled from "styled-components";

const ItemBox = styled.li`
  box-sizing: border-box;
  display: flex;
  border: 0.1rem solid #7c5d4a;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  width: 75%;
  height: 10%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  &:last-child {
    margin-bottom: 20vh;
  }
  @media screen and (min-width: 1024px) {
    height: 15%;
    padding: 1.5rem;
    border-radius: 1.5rem;
  }
`;

const ItemImg = styled.img`
  width: 4rem;
  height: 100%;
  margin-right: 1rem;
  background-color: gray;
`;

const InfoBox = styled.div`
  flex-grow: 1;
`;

const NameBox = styled.div`
  display: flex;
  font-weight: bold;
`;

const CountBox = styled.div``;

const EventBox = styled.div`
  background-color: #fe6100;
  border-radius: 45px;
  font-size: 0.7rem;
  color: white;
  padding: 0.2rem 0.5rem;
  margin-left: 0.2rem;
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
`;

interface IItemCardProps {
  item: IItemsData;
}

function ItemCard({ item }: IItemCardProps) {
  const { name, event, materialType, price } = item;

  return (
    <ItemBox>
      <ItemImg />
      <InfoBox>
        <NameBox>
          {name}
          {event == 1 ? <EventBox>이벤트</EventBox> : null}
        </NameBox>
      </InfoBox>
    </ItemBox>
  );
}

export default ItemCard;
