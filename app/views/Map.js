import React, {Component} from 'react';
import {StyleSheet,Text,View} from "react-native";
import MapView from "react-native-maps";

class Map extends Component {
  render(){
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Map;
