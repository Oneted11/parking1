import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
export default class Register  extends Component {
  static navigationOptions = {
    title: 'Smart Parking',
    headerStyle: {
      backgroundColor: '#273cad',
      height: 85,
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTruncatedBackTitle: 'Nah',
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>City</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Mobile Number</Label>
              <Input />
            </Item>
            <Button block>
            <Text>REGISTER</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}