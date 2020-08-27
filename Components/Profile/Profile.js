import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NativeRouter, Route, Link } from "react-router-native";
import axios from 'axios';



export default class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data1:[]
        }
    }
    
    componentDidMount(){
        axios
    .get("http://192.168.1.155:5000/api/users")
    .then(res => this.setState({
        data1 : res.data    
    }))
    .catch(err =>console.log("err", err))
       
    }
    render() {
        return (
            <View>
               {this.state.data1.map((el)=><Text>{el.username}</Text>)} 
            </View>
        )
    }
}
