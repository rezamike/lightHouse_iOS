import React, {Component} from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";

const BusinessDetails = (props) => {
  return(
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: props.picUrl}}
        />
      <Text style={styles.title}>
        {props.name}
      </Text>
      <Text style={styles.rating}>
        Rating: {props.rating}
      </Text>
      <Button
        style={styles.button}
        title="Check In"
        />
      <Text
        style={styles.card}>
        Anim litteris fidelissimae ex ex non quae pariatur. Nescius aute aut consequat
        graviterque ne se aut coniunctione, proident ipsum nulla ita quae te a eiusmod
        voluptatibus. Dolore vidisse de distinguantur ab fore commodo ullamco, eram ab
        expetendis aut hic quo esse magna quorum.Nostrud reprehenderit o deserunt est ne
        nostrud firmissimum qui labore constias id adipisicing, inin eram nulla enim.
        Hic nisi efflorescere. Eiusmod elit iudicem.
      </Text>
      <Button
        style={styles.button}
        title="Review"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 3,
    width:"100%",
    height: 250
  },
  title:{
    flex: 1,
    fontSize: 25
  },
  rating: {
    flex: 1
  },
  card:{
    flex: 2
  },
  button: {
    flex: 1
  }
});

export default BusinessDetails;
