import axios from "axios";
import { BASE_URL } from "./requestMethods.redux.js";
import { getTokenFromStorage } from "./setToken.redux.js";

export const getPromocionesApp = async () => {
    console.log("====================FETCH EN Get Promociones_APP====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Promociones_APP`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data = res.data.data
        return (data)
      } catch (error) {
        console.log(error);
        return []
      }
}

export async function getPromocionesAppById(id) {
  console.log("====================FETCH EN Promociones_APP by id====================");
    
    try {
        const userToken = await getTokenFromStorage()
        const res = await axios.get(`${BASE_URL}report/Promociones_APP/${id}`,{
          headers: {
            Authorization: `Zoho-oauthtoken ${userToken}`
          },
        });
        const data = res.data.data
        return (data)
      } catch (error) {
        console.log("Error en Promociones_app");
        
        console.log(error);
        return error
      } 
}

export const getUserPromotions = async () => {
  console.log("====================FETCH EN Get PromocionesComercios_Report====================");
  
  try {
    const userToken = await getTokenFromStorage();
    const res = await axios.get(`${BASE_URL}report/PromocionesComercios_Report`, {
      headers: {
        Authorization: `Zoho-oauthtoken ${userToken}`,
      },
    });

    const data = res.data.data;

    // Define the ID you want to filter by
    const targetId = "4386661000004910005";

    // Filter the array by Perfil_Usuario.ID
    const filteredData = data.filter(item => item.Perfil_Usuario?.ID === targetId);

    // Check if any filtered data is returned
    if (!filteredData.length) {
      console.log("No promotions found for the user.");
      return [];
    }

    console.log(filteredData[0]);

    // Extracting relevant data from the first filtered entry
    const { Promocion, "Promocion.Fecha_Vencimiento": fechaVencimiento, "Promocion.Descripcion_Promocion": descripcionPromocion, "Promocion.Comercios": comercios } = filteredData[0];

    // Split the comma-separated strings into arrays
    const fechas = fechaVencimiento.split(",");
    const descripciones = descripcionPromocion.split(",");
    const comerciosArray = comercios.split(",");

    // Merge the fields into the Promocion array
    const mergedPromocion = Promocion.map((promocion, index) => ({
      ...promocion, // Spread the existing promotion object
      Fecha_Vencimiento: fechas[index] || "N/A", // Handle missing dates
      Descripcion_Promocion: descripciones[index] || "N/A", // Handle missing descriptions
      display_value: comerciosArray[index] || "N/A", // Handle missing comercios
    }));

    console.log(mergedPromocion);
    return mergedPromocion;
    
  } catch (error) {
    console.log("Va a error");
    console.log(error);
    return [];
  }
};
