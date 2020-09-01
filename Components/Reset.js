import React, { Component } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, ImageBackground  } from 'react-native'
import Button from 'react-native-paper/lib/commonjs/components/Button';
export default class Reset extends Component {
    constructor(props) {  
        super(props);  
        this.state = {
          mail: '',
          password:"",
          repassword:"", 
          
      };  }


    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
            <ImageBackground source={require('../Images/groupe_549.png')} style={styles.image}>
 <Image
         //We are showing the Image from online
         source={require('../Images/logo.png')}
        
         style={styles.logoStyle}
        
       />

<View style={styles.textcontainer}><Text style={styles.textblack}>Vous avez oublié votre mot de passe ?</Text>        
<Text style={styles.textgray}>Veuillez saisir votre email et un code vous sera envoyé.</Text></View>   

  
                 <TextInput  
                   style={styles.TextInput}  
                    placeholder="Mot de passe"  
                    underlineColorAndroid = "#1074e7"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}  
                />  
                 <TextInput  
                   style={styles.TextInput}  
                    placeholder="Confirmer mot de passe"  
                    underlineColorAndroid = "#1074e7"
                    secureTextEntry={true}
                    onChangeText={(repassword) => this.setState({repassword})}  
                />  
                              
                              <Button style={styles.button} mode="contained" title="Changer mot de passe">
   Changer mot de passe
  </Button>
      </ImageBackground>
                            </View></ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('75%'), // 70% of height device screen
          width: wp('100%'), 
        color:'#fff',
        
      
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
      marginTop:hp('5%'),
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
  image: {
      height: hp('120%'), // 70% of height device screen
 width: wp('100%'),   // 80% of width device screen
     justifyContent: "center",
     alignItems: "center",
     
   },
 
    });