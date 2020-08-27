import React, { Component } from 'react';  
import { StyleSheet, View,Text,TouchableOpacity ,Image,  Linking,TextInput, Alert } from 'react-native';  
import { NativeRouter, Route, Link } from "react-router-native";
import Button from 'react-native-paper/lib/commonjs/components/Button';
import axios from 'axios';


export default class Forget extends Component {
    constructor(props) {  
        super(props);  
        this.state = {
          mail: '', 
          
      };  }
      onChange = (textValue) => {
        this.setState({
          value: textValue,       
        });}
_open=()=>{
    Linking.openURL([
        'http://www.gmail.com',
      ].join(''));
}

onsubmit(e) {
 this.setState({
   mail:''
 })
  }
      onForget=()=>{
        const {history}=this.props
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const { mail} = this.state;
        if (reg.test(this.state.mail) === false){
          alert('check mail format')
        }
        else{ 
        axios
        .post("http://192.168.1.155:5000/api/forgot",{
          mail:mail,
        })
        .then(res =>{if(res.data.message=="check your mail"){alert(res.data.message),history.push("/")}
      else(
       
        alert(res.data.message))}  )
      .catch(err =>  Alert.alert(title, message, buttons));
      this.TextInput.clear()
    }
       
      }
      
    render() {
        return (
            <View style={styles.container}>
 <Image
         //We are showing the Image from online
         source={require('../Images/logo.png')}
        
         style={styles.logoStyle}
        
       />

<View style={styles.textcontainer}><Text style={styles.textblack}>Vous avez oublié votre mot de passe ?</Text>        
<Text style={styles.textgray}>Veuillez saisir votre email et un code vous sera envoyé.</Text></View>     
                     <TextInput  
                                style={styles.TextInput}  
                                placeholder="Email" 
                                placeholderTextColor="black"
                                underlineColorAndroid = "#1074e7"
                                name="mail"
                                ref= {input => {this.TextInput = input}}
                                onSubmitEditing={(e)=>{this.onsubmit(e)}}
                                onChangeText={(mail) => this.setState({mail})}
                               
                            />  
                              
       <Button style={styles.button} mode="contained" onPress={() => {this.onForget();this.onsubmit()}}>
   Recevoir un mail
  </Button>
      
                            </View>
        )
    }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    margin: 10,
    
  },
  logoStyle:{
     height:90,
     width:242
   },
  
   textcontainer:{
    height:112,
    width:329
   },
   TextInput: {
    height: 60,
    paddingLeft:6,
    margin: 15,
      borderColor: 'transparent',
      borderWidth: 1,
      width:375,
  },
  button:{
    width:329,
    height:50,
    fontFamily:'Rubik-Regular',      
    alignSelf: 'center',
    backgroundColor: "#2dbe36" ,
    justifyContent:"center",
    alignContent:"center"  
},
textblack:{
  fontFamily:'Rubik-Bold',
  fontSize:24,
  textAlign:"center",
  color:"#3a4047",
  fontWeight:"bold",
  marginTop:20
  
},

textgray:{
  fontFamily:'Rubik-Regular',
  fontSize:14,
  textAlign:"center",
  color:"#3a4047"
},
  });