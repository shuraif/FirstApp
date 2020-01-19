import React, { Component } from 'react';
import { View, Text ,Image} from 'react-native';
//import {dd} from './../../media/images/'
export class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <Image
          style={{width: "100%"}}
          source={require('./../../media/images/linux-box.jpg')}
        />
        
      </View>
    );
  }
}


