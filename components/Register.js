import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Toast } from 'native-base';
import firebase,{ auth, db } from './firebase'
export default class Register extends Component {
  static navigationOptions = {
    title: 'Smart Parking',
    headerStyle: {
      backgroundColor: '#273cad',
      height: 65,
    },
    headerTitleStyle: {
      color: 'white'
    },
  }
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      city: '',
      PhoneNumber: ''
    }
  }
  _submit = () => {
    console.log(this.state);
    let email = this.state.email;
    let password = this.state.password;
    console.log(email,password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('errorcode is=',error.message)
      // Toast.show({text:{errorCode},type:'danger'})
      // ...
    });
    Toast.show({ text: 'sucess', type: 'success' })
    // setTimeout(this.props.navigation.navigate('Login'),1000)
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={text => this.setState({ email: text })} />
            </Item>
            <Item floatingLabel >
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={text => this.setState({ password: text })} />
            </Item>
            <Item floatingLabel >
              <Label>Full Name</Label>
              <Input onChangeText={text => this.setState({ name: text })} />
            </Item>
            <Item floatingLabel >
              <Label>City</Label>
              <Input onChangeText={text => this.setState({ city: text })} />
            </Item>
            <Item floatingLabel>
              <Label>Mobile Number</Label>
              <Input onChangeText={text => this.setState({ PhoneNumber: text })} />
            </Item>

          </Form>
          <Button block onPress={this._submit} >
            <Text>REGISTER</Text>
          </Button>
          <Button transparent onPress={() => this.props.navigation.navigate('Login')}><Text>Back to Login</Text></Button>
        </Content>
      </Container>
    );
  }
}