import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity,Image} from 'react-native'
import Details from './Details';


export default class DealCard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         result:[],
       
        };
      }
    render() {
        return (
           
            <View style={styles.container}>
            <Text style={styles.title}>{this.props.deal.deal_description}</Text>
            <Image style={styles.image}  source={{uri: this.props.deal.imageurl}}/>
            <Text style={styles.text}>{this.props.deal.discount}</Text>
        </View>
        
        )
    }
}
const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 15
    },
    image:{
        height: 200,
        width: 200,
        marginHorizontal: 15,
        borderRadius: 4
    },
    text:{
        fontWeight: 'bold'
    }
})
