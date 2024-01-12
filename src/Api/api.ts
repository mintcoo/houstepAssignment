import axios from "axios";

const BASE_URL = "http://localhost:3001";

// ------- 재료 리스트 받아오기 --------
export async function getItems() {
  const { data } = await axios(`${BASE_URL}/items`);
  return data;
}
