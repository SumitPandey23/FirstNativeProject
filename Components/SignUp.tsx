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
import User from '../assets/user.png';
import Lock from '../assets/lock.png';
import CornerSplash from '../assets/BottomCornerSplash.png';
import axios from 'axios'; // Import Axios

const { height, width } = Dimensions.get('window');

const SignUp = ({ navigation }: any) => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle signup
  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    try {
      // POST request to backend to create user
      const response = await axios.post('http://10.0.2.2:4000/SignUp', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Account created successfully');
        navigation.navigate('SignIn'); // Navigate to SignIn page after successful registration
      }
    } catch (error) {
      console.error('Error during signup:', error);
      Alert.alert('Error', 'Failed to create account. Please try again.');
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <View style={styles.ImageContainer}>
            <Image style={styles.image} source={Logo} />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.MainText}>Sign Up</Text>
            <Text style={styles.ParaText}>
              Fill in the below form and life to your car!
            </Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.LabelsText}>Name</Text>
            <Image source={User} style={[styles.InputLogo, styles.LogoPosition]} />
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#71788a"
              style={styles.InputFields}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Text style={styles.LabelsText}>Email</Text>
            <Image source={Mail} style={[styles.InputLogo, styles.LogoPosition]} />
            <TextInput
              placeholder="xyz@gmail.com"
              placeholderTextColor="#71788a"
              style={styles.InputFields}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.LabelsText}>Password</Text>
            <Image source={Lock} style={[styles.InputLogo, styles.LogoPosition]} />
            <TextInput
              placeholder="password"
              placeholderTextColor="#71788a"
              style={styles.InputFields}
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View>
            <View style={styles.TermsContainer}>
              <Text style={styles.AgreeStyle}>
                Agree With
                <TouchableOpacity style={styles.TermsStyle}>
                  <Text style={styles.termsText}>Terms & Conditions</Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View style={styles.BottomContainer}>
              <TouchableOpacity
                style={[styles.ButtonAlignment, styles.SignInButton]}
                onPress={handleSignUp} // Call handleSignUp on button press
              >
                <Text style={styles.ButtonText}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.textContainer1}>
                Already have an account?
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.TouchStyle}>Sign In</Text>
                </TouchableOpacity>
              </Text>
              <Text style={styles.FooterText}>
                By login or sign up, you agree to our terms of use and privacy
                policy
              </Text>
              <Image style={styles.BottomImageSplashStyle} source={CornerSplash} />
            </View>
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
  ImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputLogo: {
    height: 20,
    width: 20,
  },
  LogoPosition: {
    position: 'relative',
    top: 30,
    left: 5,
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
    position: 'relative',
    top: 3,
    marginLeft: 5,
  },
  TermsContainer: {
    position: 'relative',
    top: 270,
    left: 60,
  },
  AgreeStyle: {
    fontWeight: '500',
  },
  TermsStyle: {
    position: 'relative',
    top: 20,
  },
  termsText: {
    position: 'relative',
    top: 4,
    marginHorizontal: 10,
    textDecorationLine: 'underline',
    color: '#71788a',
  },
  FooterText: {
    position: 'relative',
    top: 240,
    left: 20,
    width: width * 0.9,
    textAlign: 'center',
    color: '#71788a',
  },
  BottomContainer: {
    position: 'relative',
    top: -20,
  },
  BottomImageSplashStyle: {
    height: 180,
    width: 180,
    zIndex: -10,
    position: 'relative',
    left: 233,
    top: 100,
  },
});

export default SignUp;
