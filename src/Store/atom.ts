import { atom, selector } from "recoil";

interface ISelectOrderList {
  id: string;
  price: number;
  count: number;
}

interface ITotalOrderInfo {
  totalCount: number;
  totalPrice: number;
}

// ------ 총 오더 아이템 리스트 ------
export const selectOrderListState = atom<ISelectOrderList[]>({
  key: "selectOrderList",
  default: [],
});

// ------ 총 오더 개수와 총 오더 금액 ------
export const totalOrderInfoSelector = selector<ITotalOrderInfo>({
  key: "totalOrderInfoSelector",
  get: ({ get }) => {
    const orderList = get(selectOrderListState);
    let totalCount = 0;
    let totalPrice = 0;

    orderList.forEach((order) => {
      totalCount += order.count;
      totalPrice += order.count * order.price;
    });
    return {
      totalCount,
      totalPrice,
    };
  },
});
