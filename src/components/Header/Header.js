/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';
const Header = ({length}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.length}>{length}</Text>
    </View>
  );
};

export default Header;
