import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/WashNGoLogo.png';
import Mail from '../assets/Mail.png';
import Lock from '../assets/lock.png';
import Or from '../assets/Or.png';
import Google from '../assets/Google.png';
import Apple from '../assets/apple.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const SignIn = ({ navigation }:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Sign-In Logic
  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2:4000/SignIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('jwtToken', data.token);
        Alert.alert('Success', 'Sign-in successful!');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        );
      } else {
        Alert.alert('Error', data.error || 'Sign-in failed');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          {/* Logo */}
          <View style={styles.ImageContainer}>
            <Image style={styles.image} source={Logo} />
          </View>

          {/* Header Text */}
          <View style={styles.TextContainer}>
            <Text style={styles.MainText}>Sign In</Text>
            <Text style={styles.ParaText}>
              Fill in the below form and give life to your car!
            </Text>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            <Text style={styles.LabelsText}>Email</Text>
            <Image
              source={Mail}
              style={[styles.InputLogo, styles.LogoPosition]}
            />
            <TextInput
              placeholder="xyz@gmail.com"
              placeholderTextColor="#71788a"
              style={styles.InputFields}
              value={email}
              onChangeText={setEmail}
              accessibilityLabel="Email Input"
            />
            <Text style={styles.LabelsText}>Password</Text>
            <Image
              source={Lock}
              style={[styles.InputLogo, styles.LogoPosition]}
            />
            <TextInput
              placeholder="password"
              placeholderTextColor="#71788a"
              style={styles.InputFields}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              accessibilityLabel="Password Input"
            />
            <TouchableOpacity>
              <Text style={styles.forgotPasswordStyle}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Section */}
          <View style={styles.BottomContainer}>
            {/* Sign-In Button */}
            <TouchableOpacity
              style={[styles.ButtonAlignment, styles.SignInButton]}
              onPress={handleSignIn}
            >
              <Text style={styles.ButtonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Or Separator */}
            <Image style={styles.orImage} source={Or} />

            {/* Social Sign-In Options */}
            <View style={styles.SignInOptions}>
              <Image
                style={[styles.GoogleLogo, styles.BothLogo]}
                source={Google}
              />
              <Image
                style={[styles.AppleLogo, styles.BothLogo]}
                source={Apple}
              />
            </View>

            {/* Sign Up Link */}
            <Text style={styles.textContainer1}>
              Don't have an account?
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.TouchStyle}> Sign Up</Text>
              </TouchableOpacity>
            </Text>

            {/* Footer Text */}
            <Text style={styles.FooterText}>
              By logging in or signing up, you agree to our terms of use and
              privacy policy.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  InputLogo: {
    height: 20,
    width: 20,
  },
  ImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 270,
    position: 'relative',
    top: 130,
  },
  InputFields: {
    borderColor: '#71788a',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 30,
    color: 'black',
    fontStyle: 'italic',
  },
  LogoPosition: {
    position: 'relative',
    top: 30,
    left: 5,
  },
  form: {
    width: width * 0.8,
    position: 'relative',
    left: 30,
    top: 260,
  },
  MainText: {
    fontSize: 30,
    fontWeight: '800',
  },
  ParaText: {
    color: '#71788a',
    width: width * 0.5,
    marginTop: 10,
  },
  LabelsText: {
    marginTop: 10,
  },
  SignInButton: {
    backgroundColor: '#88a7f7',
    width: width * 0.8,
    marginTop: 80,
    borderRadius: 40,
    paddingVertical: 12,
  },
  TextContainer: {
    position: 'relative',
    top: 250,
    left: 30,
  },
  ButtonText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
  },
  ButtonAlignment: {
    position: 'relative',
    top: 240,
    left: 30,
  },
  textContainer1: {
    textAlign: 'center',
    marginVertical: 17,
    position: 'relative',
    top: 240,
  },
  TouchStyle: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: '800',
    marginLeft: 5,
  },
  forgotPasswordStyle: {
    textDecorationLine: 'underline',
    fontWeight: '500',
    position: 'relative',
    left: 210,
    marginVertical: 10,
  },
  BottomContainer: {
    position: 'relative',
    top: -40,
  },
  orImage: {
    width: width * 0.6,
    height: 20,
    position: 'relative',
    top: 250,
    left: 70,
  },
  GoogleLogo: {
    position: 'relative',
    top: 250,
    left: 50,
  },
  AppleLogo: {
    position: 'relative',
    top: 250,
    left: 50,
  },
  BothLogo: {
    width: 40,
    height: 40,
    left: 140,
  },
  SignInOptions: {
    flex: 1,
    flexDirection: 'row',
    gap: 25,
    marginBottom: 40,
  },
  FooterText: {
    position: 'relative',
    top: 240,
    left: 20,
    width: width * 0.9,
    textAlign: 'center',
    color: '#71788a',
  },
});

export default SignIn;