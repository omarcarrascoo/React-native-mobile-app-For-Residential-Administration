import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import CuponCard from '../common/cards/cuponCard/CuponCard'
import { COLORS } from '../../constants/theme'
import { getPromocionesApp, getUserPromotions } from '../../redux/promocionesRedux'

function CuponesLister({styles, mark, favourites}) {
  const [cuponesData, setCuponesData] = useState([])
  useEffect(()=>{
      const setCupons = async () =>{
        const data = await getPromocionesApp()
        setCuponesData(data)
      }
      const setCuponsFav = async () =>{
        const data = await getUserPromotions()
        console.log(data);
        
        setCuponesData(data)
      }
      if (favourites === true) {
        setCuponsFav()
      }else{
        setCupons()
      }
  },[])

  return (
    <ScrollView style ={styles}>
    <View style={{ gap: 10, paddingBottom:20}}>
        {cuponesData.map((item, index)=>(
                  <CuponCard Imagen_Comercio={item["Comercios.Imagen_Comercio"]} 
                  item={{...item}} 
                  key={index} 
                  id={item.ID}
                  comercio={item.Comercios?.display_value?item.Comercios?.display_value:item.display_value} Fecha_Vencimiento={item.Fecha_Vencimiento} 
                  Descripcion_Promocion={item.Descripcion_Promocion} 
                  marked={mark} 
                  bgColor={COLORS.white}/>
        ))}
    </View>
    </ScrollView>
    
  )
}

export default CuponesLister