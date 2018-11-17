import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import {AsyncStorage} from 'react-native'
import BasicHeader from './BasicHeader'
// #3f51b5
// #273cad
export default class Login  extends Component {
  static navigationOptions = {
    title: 'Smart Parking',
    headerStyle: {
      backgroundColor: '#3f51b5',
      height: 85,
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTruncatedBackTitle: 'Nah',
  }
  _signInAsync = async () => {
    console.log(this.props);
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Tabs');
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block onPress={this._signInAsync}>
            <Text>SIGN IN</Text>
          </Button>
          </Form>
          <Button transparent onPress={()=> this.props.navigation.navigate('Register')}><Text>Register here</Text></Button>
        </Content>
      </Container>
    );
  }
}
