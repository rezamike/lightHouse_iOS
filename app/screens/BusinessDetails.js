import React, {Component} from "react";
import {StyleSheet, Text, View, Image, Button} from "react-native";

const BusinessDetails = (props) => {
  return(
    <View>
      <Image
        style={{width:"100%", height: 250}}
        source={{uri: props.picUrl}}
        />
      <Text>
        Name: {props.name}
      </Text>
      <Text>
        Rating: {props.rating}
      </Text>
      <Button
        title="Check In"
        />
      <Text>
        Anim litteris fidelissimae ex ex non quae pariatur. Nescius aute aut consequat
        graviterque ne se aut coniunctione, proident ipsum nulla ita quae te a eiusmod
        voluptatibus. Dolore vidisse de distinguantur ab fore commodo ullamco, eram ab
        expetendis aut hic quo esse magna quorum.Nostrud reprehenderit o deserunt est ne
        nostrud firmissimum qui labore constias id adipisicing, in in eram nulla enim.
        Hic nisi efflorescere. Eiusmod elit iudicem.
      </Text>
      <Button
        title="Review"
        />
    </View>
  );
}

export default BusinessDetails;
