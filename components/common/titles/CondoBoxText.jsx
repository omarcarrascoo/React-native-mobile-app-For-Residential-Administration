import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

function CondoBoxText({ label }) {
  const [text, setText] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const handlePress = () => {
    setIsEditing(true);
  };

  const handleChangeText = (newText) => {
    setText(newText);
  };

  const handleSubmitEditing = () => {
    setIsEditing(false);
  };

  return (
    <View>
        <Text style={styles.text}>{label}</Text>
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            {isEditing ? (
                <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={handleChangeText}
                onSubmitEditing={handleSubmitEditing}
                onBlur={handleSubmitEditing}
                autoFocus
                />
            ) : (
                <Text style={styles.text}>{text}</Text>
            )}
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    marginTop:SIZES.small,
    minHeight:SIZES.large*6
},
  text: {
    fontSize: 16,
    color: '#333',
  },
  textInput: {
    fontSize: 16,
    color: '#333',
    padding: 0,
  },
});

export default CondoBoxText;
