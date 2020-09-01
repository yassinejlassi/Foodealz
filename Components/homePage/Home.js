import React, { Component } from 'react'
import { StyleSheet, View,Text,TouchableOpacity,Image,  Linking, Dimensions,TextInput,ImageBackground } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.Container}>
                
                <View style={styles.Navbar}>
                    <View style={styles.Nav}>
                <Image source={require('../../Images/gps.png')}style={styles.logoS}/>
                <View style={styles.localisation}><Text style={styles.bluetext}>Mon emplacement</Text><Text style={styles.placetext}>Jardin el Menzah</Text></View>
                </View>
                <Image source={require('../../Images/filter.png')}style={styles.logoS}/>
                </View>


                <View style={styles.Searchbar}>
                <Image
        source={require('../../Images/trac_78.png')} //Change your icon image here
        style={styles.ImageStyle}
    />
                <TextInput   style={{ flex: 1 }}  
                    placeholder="Cherchez un restaurent, Créperie..."  
                    underlineColorAndroid = "transparent"/> 
                </View>

                <View style={styles.Categorie}>
                    <TouchableOpacity><Image source={require('../../Images/all.png')}style={styles.logoStyle}/>
                    <Text style={styles.textCategorie}>All</Text></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../../Images/pizza.png')}style={styles.logoStyle}/>
                    <Text style={styles.textCategorie}>Pizza</Text></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../../Images/ham.png')}style={styles.logoStyle}/>
                    <Text style={styles.textCategorie}>Hamburger</Text></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../../Images/fish.png')}style={styles.logoStyle}/>
                    <Text style={styles.textCategorie}>Healthy</Text></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../../Images/sushi.png')}style={styles.logoStyle}/>
                    <Text style={styles.textCategorie}>Bar</Text></TouchableOpacity>
               
                </View>


                </View>




           
        )
    }
}
const styles = StyleSheet.create({
    Container: {
     height: hp('95%'), // 70% of height device screen
     width: wp('100%'), 
     margin:10,
     justifyContent:"flex-start"
    },


    Navbar:{
     flexDirection:"row",
     width: wp('100%'), 
     height: hp('10%'),
     justifyContent:"space-around",
     alignItems: 'center',
     
    },
    Nav:{
        flexDirection:"row",
        width: wp('65%'), 
    },
bluetext:{
    color:"#0095ff"
},

Categorie:{
        flexDirection:"row",
        width: wp('85%'), 
        height: hp('15%'),
        justifyContent:"space-between",
        alignSelf:'center',
        marginTop:hp('2%'), 
    },
    textCategorie:{
        textAlign:"center",
        fontFamily:"Rubik-Regular",
        fontSize:12,
        lineHeight:24,
        color:"#3a4047",
    },
    logoStyle:{
        height: hp('8%'), // 70% of height device screen
        width: wp('16%'), 
    },
    logoS:{
        height: hp('5%'), // 70% of height device screen
        width: wp('7%'), 
    },
    Searchbar:{
    borderColor:'#e8e8e8',
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    borderWidth: 0.5,
    borderColor: '#000',
    height:hp('6.5%'),
    borderRadius: 8,
  
},
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
}
    
  });