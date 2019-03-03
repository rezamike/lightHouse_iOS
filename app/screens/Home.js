import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {createStackNavigator} from 'react-navigation';
//import Menu from "../sections/Menu.js";
import BusinessDetails from "./BusinessDetails.js";


class Home extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      name: "Balls Bar",
      rating: 4,
      picUrl: "https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg"
    }
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text>
          Hello this is Home.
        </Text>
        <BusinessDetails
          name={this.state.name}
          rating={this.state.rating}
          picUrl={this.state.picUrl}/>
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
