import React from 'react'
import { Text, View, StyleSheet,Dimensions } from 'react-native'


const {height,width} = Dimensions.get('window');

const Practice = () => {
  return (
    <>
    <View>
        <Text style={[styles.Container, styles.red]}>
            Sumit
        </Text>
        <Text style={[styles.Container,styles.green]}>
            Sumit
        </Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    Container:{
        height:height*1,
    },
    green:{
        color:'green'
    },
    red:{
        color:'red'
    },
})

export default Practice
