import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from "react-redux";
import store from "./store.js";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Make sure all Components/Routes we write goes in here.</Text>
        </View>
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
