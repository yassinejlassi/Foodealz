/* eslint-disable */

import React, { Component } from 'react';  
import { StyleSheet, View,Text,TouchableOpacity,Image,  Linking, Dimensions,TextInput,ImageBackground } from 'react-native';  
import { NativeRouter, Route, Link,Redirect } from "react-router-native";
import Button from 'react-native-paper/lib/commonjs/components/Button';
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





export default class Signup extends Component {
  constructor(props) {  
    super(props);  
    this.state = {
      mail: '',
      password:'',
      activated:'',
      
  };  }
  
  controle=()=>{
    const { mail,password } = this.state;
    const {history}=this.props
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.mail==""||this.state.password==""){
        alert("nopppppe")
      }
      else if (this.state.password.length<8){
        alert("password too short")
      }
      else if (reg.test(this.state.mail) === false){
        alert('wrong  format')
      }
      else {
        axios
      .post("http://192.168.1.155:5000/auth/login",{
        
        mail:mail,
        password:password,
      })
      .then(res =>{if (res.data.active != "active"){history.push('/verif')}
    else {alert("should go to home page")}} 
        )
    .catch(err => alert(err));
      }
      
  }
  
  
    _handleURL(event) {
      console.log(event.url);
      // Bit of a hack to get the token from this URL... 
      // implement yours in a safer way
      console.log(event.url.split('#')[1].split('=')[1].split('&')[0]);
    }
    _facebookLogin() {
      Linking.openURL([
        'http://192.168.1.155:5000/api/auth/facebook',
        '?response_type=token',
        '&client_id='+'1247676148624015',
        '&redirect_uri=fb1247676148624015://authorize',
        '$scope=email' // Specify permissions
      ].join(''));
    }
    _googleLogin() {
      Linking.openURL([
        'http://192.168.1.155:5000/api/auth/google',
      ].join(''));
    }
    componentDidMount() {
      Linking.addEventListener('url', this._handleURL);
      
    }
 

    onPressButton() {  
        alert('You clicked the button!')  
    }  
    render() {
      

        return (
         
            <View style={styles.MainContainer}> 
             <ImageBackground source={require('../Images/groupe_549.png')} style={styles.image}>
             <Image
                //We are showing the Image from online
                source={require('../Images/logo.png')}
               
                style={styles.logoStyle}
               
              />
            <View style={styles.form} >
              
         <TextInput style={styles.TextInput}  
         
                    placeholder="Email"  
                    underlineColorAndroid = "#0095ff"
                    onChangeText={(mail) => this.setState({mail})}
                    />  
  
         <TextInput  style={styles.TextInput}  
                    placeholder="Password"  
                    underlineColorAndroid = "#0095ff"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}/>  
                    <View style={styles.pwoublié} ><Link to="/Forget"><Text style={styles.textpw}>Mot de passe oublié ?</Text></Link></View>
            </View>

<View>
<Button style={styles.connectbtn} mode='outlined' onPress={() => this.controle()}>
    <Text style={styles.btntext}>Se connecter</Text>
  </Button>
</View>

<View style={styles.seperator}><Text style={styles.text}> Ou Bien</Text></View>
<View style={styles.ConnectButtons}>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}   onPress={() => {this._facebookLogin()}}>
              <Image
                //We are showing the Image from online
                source={require('../Images/groupe_545.png')}
               
                style={styles.ImageIconStyle}
               
              />
              

            </TouchableOpacity>
            <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={() => {this._googleLogin()}}>
              <Image 
                //We are showing the Image from online
                source={require('../Images/groupe_544.jpg')}
                
                style={styles.ImageIconStyle}
              />
              <View style={styles.SeparatorLine} />
              
            </TouchableOpacity>
            </View>
            <View style={styles.seperator}><Text style={styles.text}>Vous n'avez pas un compte ? </Text><Link to="/register"><Text style={styles.Textblue}>Inscrivez-vous!</Text></Link></View>
            </ImageBackground></View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      height: hp('100%'), // 70% of height device screen
        width: wp('100%'), 
      color:'#fff'
    },
   
    ImageIconStyle:{
      height: hp('7%'), // 70% of height device screen
      width: wp('34%'), 
      borderRadius:10,
              
      },
      ConnectButtons:{
        justifyContent: "space-between",
        alignItems: 'center',
        
        flexDirection:"row",
        shadowColor: '#000',
        shadowOffset: { height: hp('1%'), // 70% of height device screen
        width: wp('0%'), },
        shadowOpacity: 0.8,
        shadowRadius: 50,
      },
      TextInput: {
       height: hp('8%'), // 70% of height device screen
        paddingLeft:6,
        margin: 15,
          borderColor: 'transparent',
          borderWidth: 1,
          width:375,
      },
      connectbtn:{
        height: hp('7%'), // 70% of height device screen
        width: wp('70%'), 
        fontFamily:'Rubik-Regular',      
        alignSelf: 'center',
        backgroundColor: "#2dbe36" ,
        justifyContent:"center",
        alignContent:"center",
        borderRadius:5  
    },
      btntext:{
        fontSize: 16,
        fontWeight: '600',
        lineHeight:22,
        color:'#fff'
      },
      pwoublié:{
        alignSelf:"flex-end",
        marginBottom:19,
      },
      seperator:{
        marginBottom:25,
        marginTop:20,
        flexDirection:"row"
      },
      text:{
        fontFamily:"Rubik-Regular",
        fontSize:14,
        lineHeight:22,
        letterSpacing:0.07,
        color:"#808080"
      },
      textpw:{
        fontSize:12,
        color:"#808080"
      },
      Textblue:{
        color:"#0095ff",
        lineHeight:22,
       

      },
      image: {
     
        
        
       height: hp('120%'), // 70% of height device screen
    width: wp('100%'),   // 80% of width device screen
        justifyContent: "center",
        alignItems: "center",
        
      },
      logoStyle:{
        height: hp('15%'), // 70% of height device screen
        width: wp('70%'), 
      }

      
  });