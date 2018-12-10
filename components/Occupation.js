import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Picker, } from 'native-base';
import NumericInput from 'react-native-numeric-input';


export default class Occupation extends Component {
  constructor() {
    super();
    this.state = {
      selected2: undefined,
      amountowed: 0,
    }
  }

  _calculateAmt() {
    const hours = this.state.selected2
    const returnAmt = 0
    if (hours !== undefined) {
      const returnAmt = hours * 50
      console.log('return mount is ', returnAmt)
      this.setState({ amountowed: returnAmt })
    } else {
      console.log('selected2 is null')
    }
  }


  onValueChange2(value) {
    this.setState({
      selected2: value
    });
    console.log(this.state.selected2)
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Label>Amount owed </Label>
          <Text>{this.state.amountowed}</Text>
          <Form>
            <Item floatingLabel>
              <Label>Car Plate Number</Label>
              <Input onChangeText={(text) => this.setState({ PlateNo: text })} />
            </Item>
            <Item floatingLabel>
              <Label>Lot Identifier</Label>
              <Input onChangeText={(text) => this.setState({ Id: text })} />
            </Item>
            <Label> </Label>
            <Item>
              <Label>Expected time of stay</Label>
              <NumericInput value={this.state.selected2} type='up-down' onChange={this.onValueChange2.bind(this)} />
            </Item>
            <Label> </Label>
            <Button block onPress={this._calculateAmt.bind(this)}>
              <Text>Calculate</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}