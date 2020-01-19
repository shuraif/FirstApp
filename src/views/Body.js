import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {LoginPage} from './LoginPage'
export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
       <LoginPage/>
      </View>
    );
  }
}

