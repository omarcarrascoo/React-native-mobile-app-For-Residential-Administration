import axios from "axios";
import { BASE_URL } from "./requestMethods.redux.js";
import { getTokenFromStorage } from "./setToken.redux.js";

export const getUserPayments = async (id) => {
    console.log("====================FETCH EN Get Pagos_APP====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Pagos_APP?criteria=(Perfil_Usuario == 4386661000004910005)`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data = res.data.data
        return (data)
      } catch (error) {
        console.log("Va a error")
        console.log(error);
        return []
      }
}