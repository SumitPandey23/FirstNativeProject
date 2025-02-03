import React, { useEffect } from 'react';
import { View, Image, StyleSheet,Dimensions } from 'react-native';
import SplashScreenImage from '../assets/SplashScreen.png'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

const {height , width} = Dimensions.get('window');

const SplashScreen = ({ onFinish }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Image source={SplashScreenImage} style={styles.image} />
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
