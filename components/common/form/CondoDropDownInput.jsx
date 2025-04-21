import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS, SIZES } from '../../../constants/theme';

function CondoDropdown({ label, options, stylish }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(options);

  return (
    <View style={[styles.container, {...stylish}]}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        placeholder="Select an option"
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: SIZES.medium,
    marginBottom: 8,
    color: COLORS.MainText,
  },
  dropdown: {
    backgroundColor: COLORS.darkWhite,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
  },
  dropdownContainer: {
    backgroundColor: COLORS.darkWhite,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    zIndex:200
  },
});

export default CondoDropdown;

