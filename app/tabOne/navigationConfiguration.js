'use strict'
import { StackNavigator } from 'react-navigation'
import TabOneScreenOne from './views/TabOneScreenOne'

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenOne'
}
export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)