import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {createStackNavigator} from 'react-navigation';

class Other extends Component {
  static navigationOptions = {
    header: null
  };

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Text>
          Hello this is Other.
        </Text>
      </View>
    );
  }
}

export default Other;
