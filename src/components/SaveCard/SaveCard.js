/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './SaveCard.styles';
const SaveCard = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        placeholder="Yapılacak..."
        underlineColorAndroid="#A9A9A9"
        onChangeText={props.onChange}
      />
      <Button title="Kaydet" color={props.color} onPress={props.onPress} />
    </View>
  );
};

export default SaveCard;
