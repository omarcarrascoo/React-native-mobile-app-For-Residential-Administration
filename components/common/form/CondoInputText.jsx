import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

function CondoInputText({label, placeholder}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (text) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
        placeholder={placeholder}
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    borderRadius:10
  },
  currentValue: {
    fontSize: 14,
  },
});

export default CondoInputText;
