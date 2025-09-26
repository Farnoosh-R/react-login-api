import axios from "axios";
import type { ProductResponse } from "./productType";

const Url_Api = "https://dummyjson.com";

const productApi = async (): Promise<ProductResponse> => {
    const res = await axios.get<ProductResponse>(`${Url_Api}/products`)
    return(
        res.data
    )
}
export default productApi;