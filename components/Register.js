import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
export default class Register  extends Component {
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

  _submit = () => {
    console.log(this.state);
    this.props.navigation.navigate('Login')
  }
  
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={text=>this.setState({email:text})}/>
            </Item>
            <Item floatingLabel >
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={text=>this.setState({password:text})}/>
            </Item>
            <Item floatingLabel >
              <Label>Full Name</Label>
              <Input onChangeText={text=>this.setState({name:text})}/>
            </Item>
            <Item floatingLabel >
              <Label>City</Label>
              <Input onChangeText={text=>this.setState({city:text})}/>
            </Item>
            <Item floatingLabel>
              <Label>Mobile Number</Label>
              <Input  onChangeText={text=>this.setState({PhoneNumber:text})}/>
            </Item>
            
          </Form>
          <Button block onPress={this._submit} >
            <Text>REGISTER</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}