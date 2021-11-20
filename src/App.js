/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import SaveCard from './components/SaveCard';
import ToDoCard from './components/ToDoCard';
import Header from './components/Header';

const App = () => {
  const [color, setColor] = useState('#808080');
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  const [todoLength, setTodoLength] = useState(0);

  // useEffect ile todoList her değişikliğe uğradığında aktif todo'ların sayısını state'e gönderiyoruz.
  useEffect(() => {
    const newTodoList = todoList.filter(item => item.pressed === false);
    const newLength = newTodoList.length;
    setTodoLength(newLength);
  }, [todoList]);

  /* textInput componentinin içeriğinde değişiklik olduğunda butonun renginin değişmesini sağlayan fonksiyon */
  const textChange = text => {
    setTodo(text);
    text === '' ? setColor('#808080') : setColor('#FFA500');
  };

  // todo ekleyen fonksiyon
  const submitHandler = item => {
    if (item === '') {
      return Alert.alert('Boş bırakamazsınız...');
    } else if (todoList.some(todoItem => todoItem.text == item)) {
      return Alert.alert('Bu olay zaten mevcut...');
    } else {
      setTodoList(todoList => {
        return [
          {
            text: item,
            id: Math.random().toString(),
            pressed: false,
          },
          ...todoList,
        ];
      });
      setTodo('');
      setColor('#808080');
    }
  };

  // todo'ya basıldığında style'ı değiştirecek fonksiyon (onPress)
  const changeStyle = id => {
    const newTodo = todoList.map(item => {
      if (item.id === id) {
        return {...item, pressed: true};
      }
      return item;
    });
    setTodoList(newTodo);
  };

  // todo'lara uzun süreli basıldığında todo kaldırılacak (onLongPress)
  const deleteHandler = item => {
    setTodoList(todoList.filter(todoItem => todoItem !== item));
  };

  // FlatList'in todo'ları renderlamasını sağlayan fonksiyon
  function renderTodo({item}) {
    return (
      <TouchableOpacity
        onPress={() => changeStyle(item.id)}
        onLongPress={() => deleteHandler(item)}>
        <ToDoCard content={item.text} press={item.pressed} />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header length={todoLength} />
        <FlatList
          keyExtractor={item => item.id}
          data={todoList}
          renderItem={renderTodo}
        />
        <SaveCard
          onChange={textChange}
          color={color}
          value={todo}
          onPress={() => {
            submitHandler(todo);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373434',
  },
});

export default App;
