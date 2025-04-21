import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import CommerceLogoCard from '../common/cards/commerceLogoCard/CommerceLogoCard'
import { getComercios } from '../../redux/comericiosRedux'

function CommerceLister() {
  const [commerce, setCommerce] = useState([])
  useEffect(()=>{
      const setCupons = async () =>{
        const data = await getComercios()
        setCommerce(data)
      }
      setCupons()
  },[])
  
  return (
    <ScrollView style={{display:'flex',gap:20}} horizontal>
        {commerce?.map((item, index)=>(
          <CommerceLogoCard commerce={item}/>
        ))}
    </ScrollView>
  )
}

export default CommerceLister