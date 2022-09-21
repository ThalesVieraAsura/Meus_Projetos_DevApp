import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Body extends React.Component {

  constructor(props){
    super(props);
    this.nome = "Guilherme";
  }

  chamarNome(){
      return (<Text>{this.nome}</Text>);
  }

  render(){
        return (
          <View>
          <Text>Body</Text>
          </View>
        );
    }
}