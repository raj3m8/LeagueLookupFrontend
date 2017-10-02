'use strict'
import React from 'react'
import { TabNavigator } from 'react-navigation'
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const routeConfiguration = {
  TabOneNavigation: { screen: TabOneNavigation, navigationOptions: { tabBarLabel: 'Home', tabBarIcon: <Icon name="home" size={26} color="#666" /> }},
  TabTwoNavigation: { screen: TabTwoNavigation, navigationOptions: { tabBarLabel: 'Items', tabBarIcon: <Icon name="sword-cross" size={26} color="#666" /> } },
  TabThreeNavigation: { screen: TabThreeNavigation, navigationOptions: { tabBarLabel: 'Favorites', tabBarIcon: <Icon name="account-multiple" size={26} color="#666" /> } },
}
const tabBarConfiguration = {
  tabBarOptions:{
    activeTintColor: '#333',
    inactiveTintColor: '#888',
    activeBackgroundColor: '#ddd',
    inactiveBackgroundColor: '#eee',
  }
}
export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)