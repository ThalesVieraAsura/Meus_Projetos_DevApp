import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  //String: "Guilherme" (texto)
  //Int: 10 (Números inteiros)
  //Double 10.9 (Números com virgula/quebrados)
  //Boolean true/false (Verdadeiro ou falso)

  var nome = "Guilherme";
  var idade = 27;
  var cidade = "Floripa";

  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
        
        <Text>O {nome} mora em {cidade} e tem {idade} anos</Text>
      
    </View>
  );
}


