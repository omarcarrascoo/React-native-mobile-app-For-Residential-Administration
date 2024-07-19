import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import icons from '../../../constants/icons'
import { COLORS, ScreenHeigh, ScreenWidth, SIZES } from '../../../constants/theme'

function GeneralFilter({orderByFullOptions, filterFullOptions} ) {
  
  const [filterSelection, setFilterSlection] = useState(false)
  const [filterType, setFilterType] = useState(false)
  const [orderSelected, setOrderSelected] = useState("mas-recientes")
  const [filterSelected, setFilterSelected] = useState([])
  const [orderByOptions, setOrderByOptions] = useState(orderByFullOptions)
  const [filterOptions, setFilterOptions] = useState(filterFullOptions)

  const orderByActiveSelection = () =>{
    setFilterSlection(true)
    setFilterType(false)
  }

  const filterActiveSelection = () =>{
    setFilterSlection(true)
    setFilterType(true)
  }

  const selectOrderBy = (option) =>{
    setOrderSelected(option)
    setFilterSlection(false)
  }

  const toggleFilterSelection = (option) => {
    if (option === "ver-todo") {
      setFilterSelected(["ver-todo"])
    } else {
      if (filterSelected.includes(option)) {
        setFilterSelected(filterSelected.filter(item => item !== option))
      } else {
        setFilterSelected([...filterSelected.filter(item => item !== "ver-todo"), option])
      }
    }
  }

  return (
    <>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.filterbtn} onPress={orderByActiveSelection}>
          <Image style={styles.icon} source={icons.exchange}/>
          <Text style={{color:COLORS.gray}}>Ordenar por</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.filterbtn} onPress={filterActiveSelection}>
          <Image style={styles.icon} source={icons.filter2}/>
          <Text style={{color:COLORS.gray}}>Filtrar</Text>
        </TouchableOpacity>
      </View>
      {
        filterSelection === true &&
        <View style={styles.filterSelection}>
          <View style={styles.selectionSection}>
            <View style={styles.selector}>
              <View>
                {filterType === false 
                  ? <Text style={styles.filterTitle}>Ordenar por</Text>
                  : <Text style={styles.filterTitle}>Filtrar</Text>}
              </View>
              <View>
                {filterType === false
                  ? orderByOptions.map((item, index) => (
                      <TouchableOpacity key={index} style={styles.selectionBtn} onPress={() => selectOrderBy(item.slug)}>
                        <Text style={styles.selectionBtnTitle}>{item.title}</Text>
                        <View style={styles.slectionCircle}>
                          {item.slug === orderSelected && <View style={styles.purpleCircle}/>}
                        </View>
                      </TouchableOpacity>
                    ))
                  : <>
                      {filterOptions.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.selectionBtn} onPress={() => toggleFilterSelection(item.slug)}>
                          <Text style={styles.selectionBtnTitle}>{item.title}</Text>
                          <View style={styles.slectionSquare}>
                            {filterSelected.includes(item.slug) && <View style={styles.purpleSquare}/>}
                          </View>
                        </TouchableOpacity>
                      ))}
                      <TouchableOpacity onPress={()=>setFilterSlection(false)} style={styles.filterBtn}><Text style={styles.btnText}>Ver Resultados</Text></TouchableOpacity>
                    </>}
              </View>
            </View>
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: "space-between", 
    paddingBottom: SIZES.large,
    paddingHorizontal: SIZES.large
  },
  filterbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.gray,
    borderWidth: 1,
    padding: 3,
    width: "49%",
  },
  icon: {
    width: 30,
    height: 30
  },
  filterSelection: {
    height: ScreenHeigh,
    position: "absolute",
    backgroundColor: COLORS.blackTillBack,
    width: ScreenWidth,
    margin: 0,
    padding: 0,
    bottom: 0, 
    zIndex: 1000,
    justifyContent: 'flex-end',
  },
  selectionSection: {
    width: '100%',
    height: 'auto',
  },
  selector: {
    backgroundColor: COLORS.white,
    width: "100%",
    paddingHorizontal: SIZES.large,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: SIZES.large,
  },
  filterTitle: {
    color: COLORS.SecondText,
    fontSize: SIZES.large,
    marginBottom: 20
  },
  selectionBtn: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    marginBottom: SIZES.xxLarge
  },
  selectionBtnTitle: {
    fontSize: SIZES.medium,
    color: COLORS.SecondText
  },
  slectionCircle: {
    width: 20, 
    height: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  purpleCircle: {
    width: 13,
    height: 13,
    borderRadius: 100,
    backgroundColor: COLORS.MainPurple
  },
  slectionSquare: {
    width: 20, 
    height: 20,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  purpleSquare: {
    width: 13,
    height: 13,
    backgroundColor: COLORS.MainPurple
  },
  filterBtn: {
    backgroundColor: COLORS.MainPurple,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 10,
    marginTop: 10
  },
  btnText: {
    color: COLORS.white,
    fontSize: SIZES.medium
  }
})

export default GeneralFilter

