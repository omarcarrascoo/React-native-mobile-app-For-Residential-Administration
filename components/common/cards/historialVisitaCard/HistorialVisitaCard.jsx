import React from 'react'
import CondoSubTitle from '../../titles/CondoSubTitle'
import CondoTimeInfo2 from '../../../condoTimeInfo1/CondoTimeInfo2'
import { View } from 'react-native'
import CondoText from '../../titles/CondoText'
import CondoSmallText from '../../titles/CondoSmallText'
import { COLORS, SIZES } from '../../../../constants/theme'
import CondoMainBtn from '../../buttons/CondoMainBtn'

function HistorialVisitaCard({action}) {
  return (
    <View style={{marginBottom:SIZES.large, borderRadius:10, borderColor:COLORS.gray, borderWidth:.4, padding:12}}>
        <View style={{marginBottom:SIZES.medium}}>
          <CondoSmallText text={"John Doe"} />
          <CondoTimeInfo2 border={"false"}/>
        </View>
        <CondoMainBtn action={action} text={"Ver detalles"} outline={true}/>
    </View>
  )
}

export default HistorialVisitaCard