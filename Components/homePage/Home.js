import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import SearchBar from './SearchBar'
import DealCard from './DealCard';
import axios from 'axios';
import { NativeRouter, Route, Link } from "react-router-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         deals:[]
        };
      }
    
      
      componentDidMount = () => {
        axios
          .get("http://192.168.1.155:5000/api/deals")
          .then(res => this.setState({
             deals : res.data    // get data from database named FalconData and put all data in variable called profile
          }))
          .catch(err =>console.log("err", err))
      };
    render() {
        return (
            <View style={styles.container}>
                 <SearchBar/>
                 {this.state.deals.map((el,i)=>{return <DealCard key={i} deal={el} />} )}
                 
            </View>
          
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
    
})