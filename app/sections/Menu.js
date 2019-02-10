import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from "react-native";

class Menu extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate("HomeRT")}>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate("OtherRT")}>
            <Text>Other</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 6,
      backgroundColor: '#35605a'
    },
    buttonRow: {
      flex: 2,
      flexDirection: "row",
      alignItems: "center",
      borderColor: "#ffffff",
      borderBottomWidth: 1
    },
    buttonStyles: {
      backgroundColor: "#35606a",
      width: '50%',
      height: "50%",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      color:"#ffffff",
      fontSize: 18
    }
});

export default Menu;
