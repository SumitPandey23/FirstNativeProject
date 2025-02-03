import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
  const removeToken= async ()=>{
    try {
      await AsyncStorage.removeItem('token');
      console.log('Token removed successfully');
    } catch (error) {
      console.log('error removing the token',error);
    }
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={removeToken}>
        <Text>
          Remove Token
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({});