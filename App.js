import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReviewScreen from "./screens/ReviewScreen";
const Tabs = TabNavigator({
  Home: {
    screen: AuthScreen,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name="home" size={30} color="black" />
    }
  },
  Dashboard: {
    screen: WelcomeScreen,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name="dashboard" size={30} color="black" />
    }
  },
  main:{
    screen: TabNavigator({
      map: { screen: MapScreen },
      deck:{ screen: DeckScreen },
      review:{
        screen: StackNavigator({
          review:{ screen: ReviewScreen },
          settings:{ screen: SettingsScreen }

        })
      }

    })
  }
});
export default class App extends React.Component {
  render() {
    return <Tabs />;
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
