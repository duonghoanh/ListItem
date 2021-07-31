import React from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
const ListItem = ({item,deleteItem})=>{
    return(
        <TouchableOpacity style={styles.listItem} >
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Icon name="remove" 
                size={30} 
                color="red"
                onPress={()=>deleteItem(item.id)}  />
            </View>
        </TouchableOpacity>
        // {/* <View style={styles.header}>
        //     <Text style={styles.text}>
        //         {title}
        //     </Text>
        // </View> */}
    );
};

export default ListItem;  
const styles = StyleSheet.create({

    listItem:{
        padding:20,
        backgroundColor:'#3bf5dc',
        borderBottomWidth:1,
        borderColor:'#f8ff21',
    },
    listItemView:{
       flexDirection:'row',
       justifyContent:'space-between',
        alignItems:'center',

    },
    listItemText:{
        fontSize:15,
       
    },

    // header: {
    // //   flex: 1,
    //   //  justifyContent:'center',
    //     backgroundColor:'#18b1ed',
    //     height:60,
    //     padding:15,
        
    // },
    // text:{
    //     color:'#ed1851',
    //     fontSize:23,
    //     textAlign:'center',

    //},
    // imag: {
    //     borderRadius:100/2,
    //     width:20,
    //     height:20,
    //   }
});
