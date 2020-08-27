import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { NativeRouter, Route, Link } from "react-router-native";


export default class SearchBar extends Component {
    constructor(props) {  
        super(props);  
        this.state = {
          Search: '',
         
          
      };  }
    render() {
        return (
            <View style={styles.backgroundStyle}>
               
       
            <TextInput 
                style={styles.inputStyle} 
                placeholder='Search'
                //value={props.term}
                onChangeText={(Search) => this.setState({Search})}  
                autoCapitalize='none'
                autoCorrect={false}
               
            />
        </View>
        )
    }
}
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'rgb(224, 223, 220)',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 55,
        marginBottom:5,
        width:350
    },
    inputStyle:{
        // borderWidth: 1,
        // borderColor: 'black',
        fontSize: 15,
        flex: 1
    },
    
})