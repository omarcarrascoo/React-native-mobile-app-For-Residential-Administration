import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import AmenidadesCard from '../common/cards/amenidadesCard/AmenidadesCard'
import { getAmenidades } from '../../redux/amenidadesRedux'

function AmenidadesLister() {
  const [amenidades, setAmenidades] = useState([])
  
  const fetchAmenidades = async () =>{
    const amennidadesInfo = await getAmenidades()
    setAmenidades(amennidadesInfo)
    
  }
  useEffect(()=>{
    fetchAmenidades()
  },[])
  
  return (
    <ScrollView horizontal style={{gap:5}}>
       {amenidades?.map((item, index)=>(
         <AmenidadesCard key={index} amenidad={item}/>
       ))}
    </ScrollView>
  )
}

export default AmenidadesLister