import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {createStackNavigator} from 'react-navigation';
//import Menu from "../sections/Menu.js";
import BusinessDetails from "./BusinessDetails.js";


class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text>
          Hello this is Home.
        </Text>
        <BusinessDetails />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
