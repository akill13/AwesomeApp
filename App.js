import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomCount from './reusable/Count';

export default class App extends React.Component {
  state = {
    showContacts: false
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState}))
  }

  render() {
    return(
      <View style={styles.container}>
        <CustomCount count={0} />
        <Button title='toggle contacts' onPress={this.toggleContacts} />
        <ScrollView>
          <Text>Filler Text</Text>
        </ScrollView>
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