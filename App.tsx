import React,{useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LetsStart from "./Components/LetsStart.tsx";
import SignUp from "./Components/SignUp.tsx";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Components/SplashScreen.tsx';
import Home from './Components/Home.tsx';
import SignIn from './Components/SignIn.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from 'react-native';
import Test from './Components/Test.tsx';

const Stack = createNativeStackNavigator();

const App = () => {

  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [initialRoute, setInitialRoute] = useState('LetsStart');

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        if (token) {
          setInitialRoute('Home');
        } else {
          setInitialRoute('LetsStart');
        }
      } catch (error) {
        console.error('Error checking token:', error);
        setInitialRoute('LetsStart');
      } finally {
        setIsSplashVisible(false);
      }
    };

    checkToken();
  }, []);


  if (isSplashVisible) {
      return <SplashScreen onFinish={() => setIsSplashVisible(false)} />;
  }
return(
<>
<NavigationContainer>
  <Stack.Navigator initialRouteName={'Home'}>
    <Stack.Screen  options={{ headerShown: false }} name="LetsStart" component={LetsStart} />
    <Stack.Screen  options={{ headerShown: false }} name="Home" component={Home} />
    <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
    <Stack.Screen options={{headerShown:false }} name="SignUp" component={SignUp}/>
  </Stack.Navigator>
</NavigationContainer>
</>
  )
}

export default App;