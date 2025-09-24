import axios from "axios";
import type { LoginResponse } from "./authTypes";

const Api_Url = "https://dummyjson.com/auth";

const authApi = async (username: string, password: string): Promise<LoginResponse> => {
    const res = await axios.post<LoginResponse>(`${Api_Url}/login`, {
        username,
        password
    })
    return(
        res.data
    )
}
export default authApi;