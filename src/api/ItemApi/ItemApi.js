import axios from "axios";
import { BASE_API_URL } from "../../constants";

export async function searchItemsApi(query, region, version) {
    const { data: itemList } = await axios.get(`${BASE_API_URL}/GMS/83/item/list?searchFor=${query}`)
        .then(res => res);
    
    return itemList;
}