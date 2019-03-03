import React, {Component} from "react";
import {StyleSheet, Text, View, Image} from "react-native";

class BusinessDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: "Balls Bar",
      rating: 4,
      picUrl: "https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg"
    }
  }
  render(){
    return(
      <View>
        <Image
          style={{width:250, height: 250}}
          source={{uri: this.state.picUrl}}
          />
        <Text>
          Name: {this.state.name}
        </Text>
        <Text>
          Rating: {this.state.rating}
        </Text>
        <Text>
          Anim litteris fidelissimae ex ex non quae pariatur. Nescius aute aut consequat
          graviterque ne se aut coniunctione, proident ipsum nulla ita quae te a eiusmod
          voluptatibus. Dolore vidisse de distinguantur ab fore commodo ullamco, eram ab
          expetendis aut hic quo esse magna quorum.Nostrud reprehenderit o deserunt est ne
          nostrud firmissimum qui labore constias id adipisicing, in in eram nulla enim.
          Hic nisi efflorescere. Eiusmod elit iudicem.  
        </Text>
      </View>
    )
  }
}

export default BusinessDetails;
