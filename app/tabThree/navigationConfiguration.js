'use strict'
import { StackNavigator } from 'react-navigation'
import TabThreeScreenOne from './views/TabThreeScreenOne'

const routeConfiguration = {
  TabThreeScreenOne: { screen: TabThreeScreenOne }
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabThreeScreenOne'
}
export const NavigatorTabThree = StackNavigator(routeConfiguration,stackNavigatorConfiguration)