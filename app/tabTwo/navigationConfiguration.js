'use strict'
import { StackNavigator } from 'react-navigation'
import TabTwoScreenOne from './views/TabTwoScreenOne'

const routeConfiguration = {
  TabTwoScreenOne: { screen: TabTwoScreenOne }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabTwoScreenOne'
}
export const NavigatorTabTwo = StackNavigator(routeConfiguration,stackNavigatorConfiguration)