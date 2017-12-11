import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WelcomeScreen  extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
