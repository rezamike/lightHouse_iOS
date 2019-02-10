import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {createStackNavigator} from 'react-navigation';
import Menu from "../sections/Menu.js";


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
        <Menu navigate={navigate} />
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
