import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>

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
