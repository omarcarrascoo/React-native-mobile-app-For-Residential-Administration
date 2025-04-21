import axios from "axios";
import { BASE_URL } from "./requestMethods.redux.js";
import { getTokenFromStorage } from "./setToken.redux.js";

export const getNextEvents = async () => {
    console.log("====================FETCH EN Get Proximos_Eventos_Report====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Proximos_Eventos_Report`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data = res.data.data        
        return (data)
      } catch (error) {
        console.log("Va a error")
        console.log(error);
        return error
      }
}