
import React, { Component } from 'react'
import { Header, Body, Container, Title, Text,Root,} from 'native-base';

import Login from './components/Login'
import Register from './components/Register'
import AuthLoadingScreen from './components/AuthLoadingScreen'
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation'

import MapView from 'react-native-maps'
import Tab2 from './components/Tab2'
import Tab1 from './components/Tab1'
import TheNavigator from './components/TheNavigator'



// const Auth = createStackNavigator({
//   Login: {screen:()=><Login/>},
//   Register:{screen:()=> <Register/>}
// })

// const TheApp = createSwitchNavigator({
//   AuthLoading:{screen:()=><AuthLoadingScreen/>},
//   Tabs:()=><Tabs/>,
//   Auth:()=> <Auth/>,
// }, {
//     initialRouteName: 'AuthLoading',
//   })

// const Tabs = createBottomTabNavigator({
//   Map: { screen:()=> <Tab1/> },
//   Tab2: { screen:()=>< Tab2/> }
// }, {
//     order: ['Map', 'Tab2'],
//     animationEnabled: true,
//   })

//   class AppComponent extends Component{
//     render(){
//       return(<TheApp/>)      
//     }
//   }
export default class App extends Component {
  render() {
    return (
      <Root>
      <Container>
        <TheNavigator/>
      </Container>
      </Root>
    );
  }
}
