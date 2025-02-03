import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from "../assets/WashNGoLogo.png"
import SideSplash from "../assets/rightSideSplash.png"
import MiniSplash from "../assets/miniSplash.png"


const { height, width } = Dimensions.get('window');

 const LetsStart =({ navigation }:any) => {
  return (
    <>
    <SafeAreaProvider>
    <SafeAreaView>
      <View style={styles.container}> 
      <View style={styles.ImageContainer}>
      <Image
      style={styles.SplashImage}
      source={SideSplash}
      />
      <Image
      style={styles.MiniSplashImage}
      source={MiniSplash}
      />
      <Image
      style={styles.image}
      source={Logo}
      />
      </View>
      <View style={styles.alignment}>
      <View style={styles.textContainer}>
      <Text style={styles.text1}>Sparke & Shine Tranform Your Drive with Every Wash!</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} style={[styles.textContainer,styles.StartButton]}>
        <Text style={styles.ButtonText}>
          Let's Start
        </Text>
      </TouchableOpacity>
      <Text style={styles.textContainer1}>
        Already have an account?<TouchableOpacity
         onPress={()=>navigation.navigate('SignIn')}>
          <Text style={styles.TouchStyle}>
            Sign in
          </Text>
        </TouchableOpacity>
      </Text>
      </View>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    height:height,
    width:width,
  },
  ImageContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    position: 'relative', 
    top: -220,
  },
  image:{
    height:270,
    width:360,
    position:'relative',
    top:50,
  },
  MiniSplashImage:{
    height:180,
    width:180,
    position:'relative',
    bottom:-40,
    left:-115
  },
  SplashImage:{
    height:160,
    width:160,
    position:'relative',
    top:190,
    left:130
  },
  textContainer:{
    position:'relative',
    bottom:360,
    left:55,
    textAlign:'center',
  },
  textContainer1:{
    position:'relative',
    bottom:360,
    textAlign:'center',
    marginBlock:17,
  },
  text1:{
    fontSize:20,
    color:'#71788a',
    width:width*0.7,
    textAlign:'center',
    letterSpacing:1,
    fontWeight:700,
  },
  StartButton:{
    backgroundColor:'#88a7f7',
    width:width*0.8,
    marginTop:80,
    borderRadius:40,
    paddingBlock:12,
    position:'relative',
    left:40,
  },
  ButtonText:{
    textAlign:'center',
    fontWeight:800,
    fontSize:18,
  },
  TouchStyle:{
    color:'black',
    textDecorationLine:'underline',
    fontWeight:800,
    position:'relative',
    top:3,
    marginLeft:5,
  },
  alignment:{
    position:'relative',
    top:250
  }
})
 

export default LetsStart;