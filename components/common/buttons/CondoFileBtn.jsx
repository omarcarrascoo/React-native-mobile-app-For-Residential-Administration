import React from 'react'
import { Image, View } from 'react-native'
import { COLORS, SIZES } from '../../../constants/theme'
import images from '../../../constants/images'
import CondoText from '../titles/CondoText'
import CondoSmallText from '../titles/CondoSmallText'
import Icon from 'react-native-vector-icons/AntDesign';

function CondoFileBtn({stylish}) {
  return (
    <View style={{
        borderRadius:10,
        borderWidth: .5,
        borderColor:COLORS.gray,
        paddingHorizontal: SIZES.xLarge,
        paddingVertical: SIZES.medium,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        ...stylish
    }}>
        <View style={{flexDirection:'row', alignItems:'center', gap: 10}}>
            <Image style={{width:30, height:30}} source={images.pdfIcon}/>
            <View>
                <CondoText text={"Lorem ipsum dolor sit amet"}/>
                <CondoSmallText text={"3 MB"} stylish={true}/>
            </View>
        </View>
        <Icon name='download' size={25}/>
    </View>
  )
}

export default CondoFileBtn