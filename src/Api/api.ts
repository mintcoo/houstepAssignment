import axios from "axios";

const BASE_URL = "http://localhost:3001";

export interface IItemsData {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
}

// ------- 재료 리스트 받아오기 --------
export async function getItems() {
  const { data } = await axios.get<IItemsData[]>(`${BASE_URL}/items`);
  return data;
}

// ------- 주문 성공, 실패 임시 코드 --------
export async function postItems(data: boolean) {
  if (data) {
    return data;
  }
  throw new Error();
}
