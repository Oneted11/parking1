import React, { Component } from 'react';
import {AsyncStorage} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label,Button,Text ,Toast} from 'native-base';
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

  _submit = async () => {
    console.log(this.state.email);
    const Sstate={
      'email':this.state.email,
      'name':this.state.name,
      'password':this.state.password,
      'number':this.state.PhoneNumber
    }
    try{
    await AsyncStorage.setItem(this.state.email,JSON.stringify(Sstate));
    await AsyncStorage.setItem('password',this.state.password)
  }catch(error){
    console.log(error.message);
  }
  this.setState({})
   Toast.show({text:'sucess',type:'success'}) 
    // setTimeout(this.props.navigation.navigate('Login'),1000)
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
          <Button transparent onPress={() => this.props.navigation.navigate('Login')}><Text>Back to Login</Text></Button>
        </Content>
      </Container>
    );
  }
}