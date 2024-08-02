import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import icons from '../../constants/icons'

function CondoTimeInfo2({border}) {
  return (
    <View style={border==="false"?styles.infoSectionNoBorder:styles.infoSection}>
        <View style={styles.infoItem}><Image style={{ width: 15, height: 17 }} source={icons.calendar} /><Text style={styles.infoSubTilte}>Lunes, 13 de mayo 2024</Text></View>
        <View style={styles.infoItem}><Image style={styles.infoIcon} source={icons.clock} /><Text style={styles.infoSubTilte}>1:00 PM - 6:00 PM</Text></View>
    </View>
  )
}
const styles = StyleSheet.create({
    infoSection: {
        borderTopColor: COLORS.gray,
        borderTopWidth: .3,
        borderBlockColor: COLORS.gray,
        borderBottomWidth: .3,
        paddingVertical: SIZES.large,
        marginVertical: SIZES.large,
        gap: SIZES.medium
    },
    infoSectionNoBorder: {
        // borderTopColor: COLORS.gray,
        // borderTopWidth: .3,
        // borderBlockColor: COLORS.gray,
        // borderBottomWidth: .3,
        gap: SIZES.small
    },
    infoItem: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    infoIcon: {
        width: 17,
        height: 17
    },
    infoSubTilte: {
        color: COLORS.gray2,
        fontSize: SIZES.small
    },
})

export default CondoTimeInfo2