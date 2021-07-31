import React, {useState} from 'react'
import { View,Text,StyleSheet,Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddItem = ({title,addItem})=>{
    const[text,setText]=useState('');

const onChange = textValue =>setText(textValue);

    return(
     
        <View>
            <TextInput placeholder="Add item..." 
            style={styles.input} 
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn}
            onPress={() =>addItem(text)}>
                <Text style={styles.btnText}>
                <Icon name="plus" size={20} />
                Add item

                </Text>
            </TouchableOpacity>
        </View>
     
    )
};

export default AddItem;  
const styles = StyleSheet.create({
input:{
    height:40,
    padding:8,
    fontSize:16,

},
btn:{
    backgroundColor:'#C2bad8',
    padding:9,
    margin:5,
},
btnText:{
color:'blue',
fontSize:20,
textAlign:'center',
}, 
});
