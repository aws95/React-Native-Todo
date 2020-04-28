import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import 'react-native-get-random-values'
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'todo 1' },
    { id: uuid(), text: 'todo 2' },
    { id: uuid(), text: 'todo 3' },
    { id: uuid(), text: 'todo 4' }
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter a task', { text: 'Ok' })
    }
    else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      })
    }

  }
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) =>
        <ListItem item={item} deleteItem={deleteItem} />
      }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;