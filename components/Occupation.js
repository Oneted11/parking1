import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
export default class Occupation extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Car Plate Number</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Lot Number</Label>
              <Input />
            </Item>
            <Item></Item>
            <Button block>
            <Text>Begin Occupation</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}