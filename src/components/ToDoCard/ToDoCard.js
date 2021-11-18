/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View, Text} from 'react-native';
import style1 from './ToDoCard.styles';

const ToDoCard = ({content, press, todoList}) => {
  //const styl = press ? style1 : style2;
  return (
    press
    ? <View style={style1.containerPress}>
       <Text style={style1.textPress}>{content}</Text>
      </View>
    : <View style={style1.container}>
       <Text style={style1.text}>{content}</Text>
      </View>
  );
};

export default ToDoCard;
