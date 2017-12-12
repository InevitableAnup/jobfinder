import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { Button } from "react-native-elements";

export default class ReviewScreen extends React.Component {
  static navigationOptions = {
    title: "Review Jobs",
    headerRight: <Button title="Settings" />,
    style:{
      marginTop:Platform.OS === 'android' ? 24 : 0 
    }
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Button 
        title="Settings" 
        onPress={()=> navigate('settings')}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0,122,255,1)"
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
