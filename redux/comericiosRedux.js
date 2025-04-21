import axios from "axios";
import { BASE_URL } from "./requestMethods.redux.js";
import { getTokenFromStorage } from "./setToken.redux.js";

export const getComercios = async () => {
    console.log("====================FETCH EN Get Comercios_APP====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Comercios_APP`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data = res.data.data
        return (data)
      } catch (error) {
        console.log("Error fetching the data")
        console.log(error);
        return []
      }
}

export async function getComercioById(id) {
  console.log("====================FETCH EN Comercios_APP by id====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Comercios_APP/${id}`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data = res.data.data
        return (data)
      } catch (error) {
        console.log("Error en Comercios_APP");
        
        console.log(error);
        return error
      } 
}