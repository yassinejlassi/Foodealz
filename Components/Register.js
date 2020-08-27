/* eslint-disable  */
import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Dimensions,ImageBackground, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'; 
import { NativeRouter, Route, Link } from "react-router-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Button from 'react-native-paper/lib/commonjs/components/Button';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class Register extends Component {
  constructor(props) {  
    super(props);  
    this.state = {
      firstname:'',
      lastname:'',  
      username: '',
      age:'',
      mail:'',
      password:'',
      repassword:''
      
  };  }
  
AddUser=()=>{
  const { username,age,mail,password } = this.state;
  const {history}=this.props
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (this.state.mail==""||this.state.password==""||this.state.age==""||this.state.username==""||this.state.repassword==""){
      alert("nopppppe")
    }
    else if (this.state.password.length<8){
      alert("password too short")
    }
    else if(this.state.password != this.state.repassword){
      alert("verifier")
    }
    else if (reg.test(this.state.mail) === false){
      alert('wrong  format')}
     else{
      axios
      .post("http://192.168.1.155:5000/auth/register",{
        username:username,
        age:age,
        mail:mail,
        password:password,
      })
      .then(res => history.push('/verif'), )
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
       <ScrollView >

      <ImageBackground source={require('../Images/groupe_549.png')} style={styles.image}>
      <Image
         //We are showing the Image from online
         source={require('../Images/logo.png')}
        
         style={styles.logoStyle}
        
       />
     <View style={styles.form} >
       
  

<TextInput  
                    style={styles.TextInput}  
                    placeholder="Nom d'utilisateur"  
                    underlineColorAndroid = "#1074e7"
                    
                    onChangeText={(username) => this.setState({username})}  
                   
                />  
               
                 <TextInput  
                    style={styles.TextInput}  
                    placeholder="Date d'anniversaire"  
                    underlineColorAndroid = "#1074e7"
                    
                    onChangeText={(age) => this.setState({age})}  
                   
                />  
               
                 <TextInput  
                    style={styles.TextInput}  
                    placeholder="Email"  
                    underlineColorAndroid = "#1074e7"
                    
                    onChangeText={(mail) => this.setState({mail})}  
                   
                />  
                
         
        
        
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
               
     </View>

     <View>
       <Link to="/verif">
<Button style={styles.connectbtn} mode='outlined' onPress={() => this.AddUser()}>
    <Text style={styles.btntext}>S'inscrire gratuitement</Text>
    
  </Button>
  </Link>
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
            <View style={styles.seperator}><Text style={styles.text}>Vous avez deja un compte ? </Text><Link to="/"><Text style={styles.Textblue}>Connectez-vous!</Text></Link></View>

     
     </ImageBackground>
     </ScrollView></View>
 )
}
}

const styles = StyleSheet.create({
  MainContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
    
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
      marginTop:14,
    }

    
});