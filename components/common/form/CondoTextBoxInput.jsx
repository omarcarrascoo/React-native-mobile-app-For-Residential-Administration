import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

function CondoTextBoxInput({label, placeholder, stylish}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={[styles.container, {...stylish}]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: SIZES.medium,
    marginBottom: 8,
    color:COLORS.MainText
  },
  input: {
    height:120,
    borderColor: COLORS.gray,
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    borderRadius:10,
    padding:SIZES.small
  },
  currentValue: {
    fontSize: 14,
  },
});

export default CondoTextBoxInput;

