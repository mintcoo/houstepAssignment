import { IItemsData } from "Api/api";
import { selectOrderListState } from "Store/atom";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

const ItemCardContainer = styled.li`
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

const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NameBox = styled.div`
  display: flex;
  font-weight: bold;
`;

const CountBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const Count = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

const EventIcon = styled.div`
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
  const { id, name, event, price } = item;
  const [itemCount, setItemCount] = useState<number>(0);
  const setSelectOrderList = useSetRecoilState(selectOrderListState);
  const value = useRecoilValue(selectOrderListState);

  useEffect(() => {
    console.log(value, "지금리스트?");
  }, [value]);

  // ----- 아이템 제거 함수-----
  const onRemoveItem = () => {
    // 개수 음수 안되게
    if (itemCount <= 0) {
      setItemCount(0);
      return;
    }
    setItemCount((prevCount) => prevCount - 1);

    // 주문 리스트에 아이템 제거
    setSelectOrderList((prevOrderList) => {
      const index = prevOrderList.findIndex((element) => element.id === id);
      const newOrder = { id, price, count: itemCount - 1 };
      // 아이템이 1개에서 0개로 될때 아이템 제거
      if (itemCount === 1) {
        const newOrderList = [...prevOrderList];
        newOrderList.splice(index, 1);
        return [...newOrderList];
      }
      // 기존 아이템이 없을 경우
      if (index === -1) {
        return [...prevOrderList];
      }
      // 기존 아이템이 있을 경우
      const newOrderList = [...prevOrderList];
      newOrderList.splice(index, 1);
      return [...newOrderList, newOrder];
    });
  };

  // ----- 아이템 추가 함수-----
  const onAddItem = () => {
    // 개수 999 못넘게
    if (itemCount >= 999) {
      setItemCount(999);
      return;
    }
    setItemCount((prevCount) => prevCount + 1);

    // 주문 리스트에 아이템 추가
    setSelectOrderList((prevOrderList) => {
      const index = prevOrderList.findIndex((element) => element.id === id);
      const newOrder = { id, price, count: itemCount + 1 };
      // 기존 아이템이 없을 경우
      if (index === -1) {
        return [...prevOrderList, newOrder];
      }
      // 기존 아이템이 있을 경우
      const newOrderList = [...prevOrderList];
      newOrderList.splice(index, 1);
      return [...newOrderList, newOrder];
    });
  };

  return (
    <ItemCardContainer>
      {/* 아이템 이미지 */}
      <ItemImg />
      <InfoContainer>
        {/* 아이템 이름과 이벤트 유무 */}
        <NameBox>
          {name}
          {event === 1 ? <EventIcon>이벤트</EventIcon> : null}
        </NameBox>
        <CountBox>
          {/* 아이템 개수 추가 및 제거 */}
          <Count>
            <div onClick={onRemoveItem}>-</div>
            <div>{itemCount}</div>
            <div onClick={onAddItem}>+</div>
          </Count>
          {/* 아이템 가격 */}
          {price}원
        </CountBox>
      </InfoContainer>
    </ItemCardContainer>
  );
}

export default ItemCard;
