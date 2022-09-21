import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  var nome = "mario";

  var numero = 10;
  var conteudo = <Text>Danki Code</Text>;

  // == igual
  // != diferente

  // <= menor ou igual
  // >= maior ou igual

  // > maior
  // < menor


  // || OU

  // && E

  if(nome == "guilherme" || numero == 10){
    
    conteudo = <Text>Joao</Text>
    
  }



  return (
    <View>
      {conteudo}
    </View>
  );
}

