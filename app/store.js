'use strict'
// Redux
import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
// Navigation
import { NavigatorTabOne } from './tabOne/navigationConfiguration'
import { NavigatorTabTwo } from './tabTwo/navigationConfiguration'
import { NavigatorTabThree } from './tabThree/navigationConfiguration'
import { TabBar } from './tabBar/navigationConfiguration'
// Middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}
export default createStore(
  combineReducers({
    tabBar: (state,action) => TabBar.router.getStateForAction(action,state),
    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),
    tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),
    tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),
  }),
  middleware(),
)

export const uiTheme = {
  palette: {
    primaryColor: 'green',
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};