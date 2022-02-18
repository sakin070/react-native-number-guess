import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = ( props) => {
    return(
        <View style={sytles.header} >
            <Text style={sytles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const sytles = StyleSheet.create({
    header:{
        alignItems:'center',
        justifyContent: 'center',
        width: '100%',
        height:90,
        paddingTop:36,
        backgroundColor: Colors.primary
    },
    headerTitle:{
        color:'black',
        fontSize:18
    }
})
export default Header;