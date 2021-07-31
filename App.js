import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList,Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';
import { v4 as uuidv4 } from 'uuid';
const App = () => {

  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Milk' },
    { id: uuidv4(), text: 'Beef' },
    { id: uuidv4(), text: 'Chicken'},
    { id: uuidv4(), text: 'Crab' },
    { id: uuidv4(), text: 'Fish' },

  ]);
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text =>{
    if(!text){
Alert.alert('No','please enter item',{text:'Ok'});
    }
    else{
      setItems(prevItems=>{
        return [{id:uuidv4(),text},...prevItems];
      });
    }
   
  };

  return (
    <View style={styles.container}>

      <Header />
      <AddItem addItem={addItem}/>

      {/* <Image
        source={require('./Image/img-me.png')}
        style={styles.img} /> */}

      <FlatList 
      data={items}
      renderItem={({ item }) => ( 
      <ListItem item={item} deleteItem={deleteItem} />
       )}
      //<Text>{item.text}</Text> }
      />
    </View>
  );

};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // fontSize:30,
  },
  img: {
    borderRadius: 100 / 2,
    width: 90,
    height: 90,
  }
});
