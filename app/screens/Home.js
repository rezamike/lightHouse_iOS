import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {createStackNavigator} from 'react-navigation';

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Text>
          Hello this is Home.
        </Text>
      </View>
    );
  }
}

export default Home;
