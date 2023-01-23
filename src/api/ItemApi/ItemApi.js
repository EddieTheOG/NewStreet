import axios from "axios";
import { BASE_API_URL } from "../../constants";

// TO-DO: move array destructuring from ItemsContainer component to here.
// TO-DO: Allow users to select region and version
export async function searchItemsApi(query, region, version) {
    const { data: itemList } = await axios.get(`${BASE_API_URL}/GMS/83/item/list?searchFor=${query}`)
        .then(res => res);
    
    return itemList;
}