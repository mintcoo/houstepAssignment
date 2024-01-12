import { atom } from "recoil";

interface ISelectOrderList {
  id: string;
  price: number;
  count: number;
}

// ------ 총 오더 개수 ------
export const selectOrderListState = atom<ISelectOrderList[]>({
  key: "selectOrderList",
  default: [],
});
// 아무래도 전부 각각 값 받아서 selector로 나눠야할듯
