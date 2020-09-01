import React, { Component } from 'react';  
import { StyleSheet, View,Text,TouchableOpacity ,Image,  Linking,TextInput, Alert } from 'react-native';  
import { NativeRouter, Route, Link } from "react-router-native";
import Button from 'react-native-paper/lib/commonjs/components/Button';
import axios from 'axios';


export default class Verif extends Component {
    constructor(props) {  
        super(props);  
        this.state = {
          num1: '',
          num2: '',
          num3: '',
          num4: '',
         
          
      };  }
    
     
      onVerif=()=>{
       
           let num= this.state.num1+this.state.num2+this.state.num3+this.state.num4
           
          if(this.state.num1==""||this.state.num2==""||this.state.num3==""||this.state.num4==""){
              alert("champs vides")
          }
          else if(this.state.code!=""){
           
               axios
               .post("http://192.168.1.155:5000/verify",{
                  code:num
               })
               .then(res => alert('should go to home page'), )
             .catch(err =>  alert('hgjkl'));
             }
          }
         
       

    render() {
        return (
            <View style={styles.container}>


<View style={styles.textcontainer}><Text style={styles.textblack}>Nous venons tout juste de vous 
envoyer un code de vérification, veuillez le saisir ici !</Text>        
</View>     

<View style={styles.inputscontainer}>
<TextInput  
                                style={styles.TextInput}  
                                placeholder="-" 
                                placeholderTextColor="white"
                                underlineColorAndroid = "transparent"
                                onChangeText={(num1) => this.setState({num1})}
                                maxLength={1}
                                keyboardType={'numeric'}
                               
                            />  
                            <TextInput  
                                style={styles.TextInput}  
                                placeholder="-" 
                                placeholderTextColor="white"
                                underlineColorAndroid = "transparent"
                                onChangeText={(num2) => this.setState({num2})}
                                maxLength={1}
                                keyboardType={'numeric'}
                               
                            />  
                            <TextInput  
                                style={styles.TextInput}  
                                placeholder="-" 
                                placeholderTextColor="white"
                                underlineColorAndroid = "transparent"
                                onChangeText={(num3) => this.setState({num3})}
                                maxLength={1}
                                keyboardType={'numeric'}
                               
                            />  
                            <TextInput  
                                style={styles.TextInput}  
                                placeholder="-" 
                                placeholderTextColor="white"
                                underlineColorAndroid = "transparent"
                                onChangeText={(num4) => this.setState({num4})}
                                maxLength={1}
                                keyboardType={'numeric'}
                               
                            />  
                           

</View>
                     
                              
       <Button style={styles.button} mode="contained" onPress={this.onVerif}>
   Vérifier code
  </Button>
  <Link to='/'><Text>back</Text></Link>

      
                            </View>
        )
    }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    margin: 10,
    
  },
  logoStyle:{
     height:90,
     width:242
   },
  
   textcontainer:{
    height:23,
    width:329
   },
   TextInput: {
    backgroundColor:'#0095ff',
    borderRadius:60,
    height: 65,
    paddingLeft:6,
   width:65,
   fontSize:28,
   textAlign: 'center',
   color:"#fff",

  },
  button:{
    width:329,
    height:50,
    fontFamily:'Rubik-Regular',      
    alignSelf: 'center',
    backgroundColor: "#2dbe36" ,
    justifyContent:"center",
    alignContent:"center",
    marginTop:50  

},
textblack:{
  fontFamily:'Rubik-Bold',
  fontSize:14,
  textAlign:"center",
  lineHeight:22,
  color:"#3a4047",
  fontWeight:"bold",
  marginTop:20
  
},

inputscontainer:{
  flexDirection:"row",
 justifyContent:"space-between",
  width:340,
  marginTop:70
},
  });