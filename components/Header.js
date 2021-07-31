import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Header = ({title})=>{
    return(
        
        <View style={styles.header}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
};
Header.defaultProps={
    title:'ManageItem📦'
}
export default Header;  
const styles = StyleSheet.create({
    header: {
    //   flex: 1,
      //  justifyContent:'center',
        backgroundColor:'#18b1ed',
        height:60,
        padding:15,
        
    },
    text:{
        color:'#ed1851',
        fontSize:23,
        textAlign:'center',

    },
    // imag: {
    //     borderRadius:100/2,
    //     width:20,
    //     height:20,
    //   }
});
