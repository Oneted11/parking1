import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation'
import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import AuthLoadingScreen from './AuthLoadingScreen'
import Tab2 from './Tab2'
import Tab1 from './Tab1'

const Auth = createStackNavigator({
  Login: Login,
  Register: Register,
})

const TheApp = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Tabs: () => <Tabs />,
  Auth: Auth,
}, {
    initialRouteName: 'Auth',
  })

export const Tabs = createBottomTabNavigator({
  Map: Tab1,
  Occupy: Tab2,
}, {
    order: ['Map', 'Occupy'],
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 14,
        color:'white'
      },
      activeBackgroundColor:'#242e69',
      style: {
        backgroundColor: '#3f51b5',
        
      },
    }
  })
export default class TheNavigator extends Component {
  render() {
    return (
      <TheApp />
    )
  }
}