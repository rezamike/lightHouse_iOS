import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from "./app/screens/Home.js";

import {Provider} from "react-redux";
import store from "./store.js";

const myRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  initialRouteName: "HomeRT"
});
const AppContainer = createAppContainer(myRoutes);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer style={styles.container} />
      </Provider>
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
