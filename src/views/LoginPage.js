import React, { Component } from 'react';
import { View, Text , TextInput,Button} from 'react-native';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:"",
        password:"",
    
    };
  }
login=()=>{
  if(this.state.username=="shuraifpilathara@gmail.com"&&this.state.password=="shuraif@123"){
alert('login success')
  }
  else{
    alert('login failed')
  }
  
}
  render() {
    return (
      <View >
        <Text style={{alignItems:'center'}}> User name </Text>
 
        <TextInput  style={{height: 40,alignItems:'center'}}
          placeholder="Enter your user name"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text style={{alignItems:'center'}}> Password </Text>
        <TextInput  style={{height: 40,alignItems:'center'}}
          placeholder="Enter your password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.login}></Button>
      </View>
    );
  }
}


