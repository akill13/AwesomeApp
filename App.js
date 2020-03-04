import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomCount from './reusable/Count';

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <CustomCount count={0} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})