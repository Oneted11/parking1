import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Toast } from 'native-base';
import { AsyncStorage } from 'react-native'
import firebase,{auth,db} from './firebase'

// #3f51b5
// "module:metro-react-native-babel-preset",
export default class Login extends Component {
  static navigationOptions = {
    title: 'Smart Parking',
    headerStyle: {
      backgroundColor: '#3f51b5',
      height: 85,
    },
    headerTitleStyle: {
      color: 'white'
    },
  };

  constructor() {
    super();
    this.state = {
      email:'',
      password:'',
    }
  }

  _signInAsync = async () => {
    let email=this.state.email;
    let password=this.state.password;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('login error is = ',error.code);
      // ...
    });
    await AsyncStorage.setItem('userToken', "abs")
    this.props.navigation.navigate('Tabs');

  };

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text) => this.setState({ email: text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(text) => this.setState({ Password: text })} />
            </Item>
            <Button block onPress={this._signInAsync}>
              <Text>SIGN IN</Text>
            </Button>
          </Form>
          <Button transparent onPress={() => this.props.navigation.navigate('Register')}><Text>Register here</Text></Button>
        </Content>
      </Container>
    );
  }
}
